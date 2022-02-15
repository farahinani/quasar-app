<template>
  <div>
    <q-btn
      color="primary"
      label="Request permission"
      @click="requestDeviceMotion()"
    />
  </div>
  <q-btn color="primary" label="Request permission 2" @click="firstClick()" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  setup() {
    function requestDeviceMotion(callback) {
      if (window.DeviceMotionEvent == null) {
        callback(new Error("DeviceMotion is not supported."));
      } else if (DeviceMotionEvent.requestPermission) {
        DeviceMotionEvent.requestPermission().then(
          function (state) {
            if (state == "granted") {
              callback(null);
            } else callback(new Error("Permission denied by user"));
          },
          function (err) {
            callback(err);
          }
        );
      } else {
        // no need for permission
        callback(null);
      }
    }

    function firstClick() {
      requestDeviceMotion(function (err) {
        if (err == null) {
          window.removeEventListener("click", firstClick);
          window.removeEventListener("touchend", firstClick);
          window.addEventListener("devicemotion", function (e) {
            // access e.acceleration, etc.
          });
        } else {
          // failed; a JS error object is stored in `err`
        }
      });
    }
    window.addEventListener("click", firstClick);
    window.addEventListener("touchend", firstClick);

    return {
      requestDeviceMotion,
      firstClick,
    };
  },
});
</script>


