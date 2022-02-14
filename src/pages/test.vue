<template>
  <div>
    <q-btn
      color="primary"
      label="Request permission"
      @click="requestDeviceMotion"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { Camera, CameraResultType } from "@capacitor/camera";

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
  },
});
</script>


