<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="getAccel()"
      label="test btn 2"
    >
    </q-btn>
    <button id="accelPermsButton" style="height: 50px" onclick="getAccel()">
      test
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  methods: {
    getAccel() {
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          console.log("accelerometer permission granted");
          // Do stuff here
        }
      });
    },
  },
});
</script>


