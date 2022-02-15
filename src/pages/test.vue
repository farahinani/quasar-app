<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="getAccel()"
      label="test @click getAccel()"
    >
    </q-btn>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="getAccel"
      label="test @click getAccel"
    >
    </q-btn>

    <button id="start">Approve</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

function createEvent(type, detail) {
  return new CustomEvent(type, { detail });
}

function getMaxAcceleration(event) {
  let max = 0;
  if (event.acceleration) {
    for (const key of ["x", "y", "z"]) {
      const value = Math.abs(event.acceleration[key] ?? 0);
      if (value > max) max = value;
    }
  }
  return max;
}

class Shake extends EventTarget {
  constructor(options) {
    super();
    this.#handleDeviceMotion = (event) => {
      const diff = event.timeStamp - this.#timeStamp;
      if (diff < this.#timeout) return;
      const accel = getMaxAcceleration(event);
      if (accel < this.#threshold) return;
      this.#timeStamp = event.timeStamp;
      this.dispatchEvent(createEvent("shake", event));
    };
    const { threshold = 15, timeout = 1000 } = options ?? {};
    this.#threshold = threshold;
    this.#timeout = timeout;
    this.#timeStamp = timeout * -1;
  }
  #approved;
  #threshold;
  #timeout;
  #timeStamp;
  // @ts-ignore
  addEventListener(type, listener, options) {
    super.addEventListener(type, listener, options);
  }
  dispatchEvent(event) {
    return super.dispatchEvent(event);
  }
  // @ts-ignore
  removeEventListener(type, callback, options) {
    super.removeEventListener(type, callback, options);
  }
  async approve() {
    if (typeof this.#approved === "undefined") {
      if (!("DeviceMotionEvent" in window)) return (this.#approved = false);
      try {
        if (typeof DeviceMotionEvent.requestPermission === "function") {
          const permissionState = await DeviceMotionEvent.requestPermission();
          this.#approved = permissionState === "granted";
        } else this.#approved = true;
      } catch {
        this.#approved = false;
      }
    }
    return this.#approved;
  }
  #handleDeviceMotion;
  async start() {
    const approved = await this.approve();
    if (!approved) return false;
    window.addEventListener("devicemotion", this.#handleDeviceMotion);
    return true;
  }
  stop() {
    window.removeEventListener("devicemotion", this.#handleDeviceMotion);
  }
}

const shake = new Shake({ threshold: 15, timeout: 1000 });
shake.addEventListener("shake", (ev) => {
  console.log("Shake!", ev.detail.timeStamp, ev.detail.acceleration);
});
const button = document.getElementById("start");
if (button) {
  button.addEventListener(
    "click",
    async () => {
      const approved = await shake.start();
      const div = document.body.appendChild(document.createElement("div"));
      div.textContent = `Approved: ${String(approved)}`;
      button.remove();
    },
    { once: true }
  );
}

export default defineComponent({
  name: "test",
});
</script>


