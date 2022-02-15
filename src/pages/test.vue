<template>
  <div>
    <q-btn
      color="primary"
      label="grant permission"
      @click="requestDeviceMotion()"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  methods() {
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

    return {
      requestDeviceMotion,
    };
  },
});
</script>


