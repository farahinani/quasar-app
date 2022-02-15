<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="getAccel()"
      label="test getAccel()"
    >
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";

// let accelHandler: PluginListenerHandle;

export default defineComponent({
  name: "test",

  methods: {
    getAccel() {
      var oldx = 0;
      var oldy = 0;

      var shakethreshold = 10;

      // if (window.DeviceMotionEvent) {
      //   window.addEventListener("devicemotion", function () {
      //     if (
      //       Math.abs(oldx - Math.round(event.acceleration.x)) >
      //         shakethreshold ||
      //       Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
      //     ) {

      //       alert("shaken");
      //     }
      //     oldx = Math.round(accel.x);
      //     oldy = Math.round(accel.y);
      //   });
      // }

      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          window.addEventListener("devicemotion", (event) => {
            console.log(event);

            if (
              Math.abs(oldx - Math.round(event.acceleration.x)) >
                shakethreshold ||
              Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
            ) {
              //shaken, do something
              alert("shaken");
            }
            oldx = Math.round(accel.x);
            oldy = Math.round(accel.y);
          });

          window.addEventListener("deviceorientation", (event) => {
            console.log(event);
          });
        }
      });
    },
  },
});
</script>


