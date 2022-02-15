<template>
  <div>
    <q-btn color="primary" label="Request permission" @click="onClick()" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  setup() {
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
      }
    }

    return {
      onClick,
    };
  },
});
</script>


