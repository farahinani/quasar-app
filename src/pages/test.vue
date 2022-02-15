<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      label="btn onclick()"
      @click="onClick"
    />
    <q-btn
      id="accelPermsButton"
      color="primary"
      label="btn getAccel()"
      @click="getAccel"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  methods() {
    function onClick() {
      // feature detect
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              window.addEventListener("devicemotion", () => {});
            }
          })
          .catch(console.error);
      } else {
        // handle regular non iOS 13+ devices
        console.log("test");
      }
    }

    function getAccel() {
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          console.log("accelerometer permission granted");
          // Do stuff here
        }
      });
    }

    return {
      getAccel,
      onClick,
    };
  },
});
</script>


