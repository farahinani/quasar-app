<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      label="grant permission"
      onclick="getAccel()"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  methods() {
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


