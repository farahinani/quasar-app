<template>
  <div class="q-pa-md">
    <div v-if="$q.platform.is.desktop">rendered on Desktop!</div>
    <!-- <div v-if="$q.platform.is.android">I'm only rendered on android!</div>
    <div v-if="$q.platform.is.ios">I'm only rendered on ios!</div> -->
    <div v-if="$q.platform.is.ios">
      Please press button "Start shake"
      <q-btn
        id="accelPermsButton"
        color="primary"
        @click="getAccel()"
        label="Start Shake"
      >
      </q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

export default defineComponent({
  name: "test",

  setup() {
    const $q = useQuasar();

    $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;

    if ($q.platform.is.ios) {
      alert("alert: this is ios");
      //console.log("msg: this is desktop");

      function getAccel() {
        var oldx = 0;
        var oldy = 0;

        var shakethreshold = 20;

        DeviceMotionEvent.requestPermission().then((response) => {
          if (response == "granted") {
            window.addEventListener("devicemotion", (event) => {
              // console.log(event);

              if (
                Math.abs(oldx - Math.round(event.acceleration.x)) >
                  shakethreshold ||
                Math.abs(oldy - Math.round(event.acceleration.y)) >
                  shakethreshold
              ) {
                //shaken, do something
                alert("shaken !");
              }
              oldx = Math.round(accel.x);
              oldy = Math.round(accel.y);
            });

            window.addEventListener("deviceorientation", (event) => {
              console.log(event);
            });
          }
        });
      }

      return {
        getAccel,
      };
    } else if ($q.platform.is.android) {
      //console.log("This is android");
      alert("This is android!");

      //----ALEXGIBSON SHAKE.JS CODE----//
      // var myShakeEvent = new Shake({ threshold: 10, timeout: 1000 });
      // myShakeEvent.start();
      // window.addEventListener("shake", shakeEventDidOccur, false);
      // function shakeEventDidOccur() {
      //   alert("Shake!");
      // }

      var oldx = 0;
      var oldy = 0;
      var shakethreshold = 20;

      window.addEventListener("devicemotion", (event) => {
        // console.log(event);

        if (
          Math.abs(oldx - Math.round(event.acceleration.x)) > shakethreshold ||
          Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
        ) {
          //shaken, do something
          alert("shaken !");
        }
        oldx = Math.round(accel.x);
        oldy = Math.round(accel.y);
      });
    } else {
      alert("this is dekstop!");
    }
  },
});
</script>


