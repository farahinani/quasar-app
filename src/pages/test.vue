<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      label="test btn"
      @click="getAccel"
    />
    <q-btn
      id="accelPermsButton"
      color="primary"
      onclick="getAccel()"
      label="test btn 2"
    >
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  setup() {
    function getAccel() {
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          // Add a listener to get smartphone acceleration
          window.addEventListener("devicemotion", (event) => {
            console.log(event);
          });
          // Add a listener to get smartphone orientatio
          window.addEventListener("deviceorientation", (event) => {
            console.log(event);
          });
        }
      });
    }
  },
});
</script>


