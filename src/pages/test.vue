<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="requestDeviceMotion"
      label="test btn 2"
    >
    </q-btn>
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
              console.log("yay");
            } else callback(new Error("Permission denied by user"));
          },
          function (err) {
            callback(err);
            console.log("yay");
          }
        );
      } else {
        // no need for permission
        callback(null);
        console.log("nay");
      }
    }

    return {
      requestDeviceMotion,
    };
  },
});
</script>


