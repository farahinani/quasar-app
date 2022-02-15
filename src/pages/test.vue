<template>
  <div>
    <q-btn
      color="primary"
      label="Request permission"
      @click="requestDeviceMotion()"
    />
  </div>
  <q-btn color="primary" label="Request permission 2" @click="getAccel()" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  setup() {
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
    };
  },
});
</script>


