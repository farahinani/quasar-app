<template>
  <div>
    <q-btn color="primary" label="Request permission" @click="myButton" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";

export default defineComponent({
  name: "test",

  methods() {
    myButton.addEventListener("click", async () => {
      try {
        await DeviceMotionEvent.requestPermission();
      } catch (e) {
        // Handle error
        return;
      }

      // Once the user approves, can start listening:
      accelHandler = await Motion.addListener("accel", (event) => {
        console.log("Device motion event:", event);
      });
    });

    // Stop the acceleration listener
    const stopAcceleration = () => {
      if (accelHandler) {
        accelHandler.remove();
      }
    };

    // Remove all listeners
    const removeListeners = () => {
      Motion.removeAllListeners();
    };

    return {
      stopAcceleration,
      removeListeners,
    };
  },
});
</script>


