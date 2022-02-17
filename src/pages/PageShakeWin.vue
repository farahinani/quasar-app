<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-h5 text-center">
              You have 2 tries
              <q-badge color="teal-10" align="middle"> 1/2 </q-badge>
            </div>
          </div>

          <div v-if="$q.platform.is.desktop">rendered on Desktop!</div>

          <div v-if="$q.platform.is.ios">
            Please press button "Start shake"<br />
            <q-btn
              id="accelPermsButton"
              color="primary"
              @click="getAccel()"
              label="Start Shake"
            >
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "PageShakeWin",

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

        var shakethreshold = 25;

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

      var oldx = 0;
      var oldy = 0;
      var shakethreshold = 25;

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

  // methods: {
  //   getAccel() {
  //     var oldx = 0;
  //     var oldy = 0;

  //     var shakethreshold = 20;

  //     DeviceMotionEvent.requestPermission().then((response) => {
  //       if (response == "granted") {
  //         window.addEventListener("devicemotion", (event) => {
  //           // console.log(event);

  //           if (
  //             Math.abs(oldx - Math.round(event.acceleration.x)) >
  //               shakethreshold ||
  //             Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
  //           ) {
  //             //shaken, do something
  //             alert("shaken !");
  //           }
  //           oldx = Math.round(accel.x);
  //           oldy = Math.round(accel.y);
  //         });

  //         window.addEventListener("deviceorientation", (event) => {
  //           console.log(event);
  //         });
  //       }
  //     });
  //   },
  // },

  //DONT DELETE THIS. WORK IN PROGRESS//
  // setup() {
  //   var px = 50;
  //   var py = 50;
  //   var vx = 0.0;
  //   var vy = 0.0;
  //   var updateRate = 1 / 60;
  //   function getAccel() {
  //     DeviceMotionEvent.requestPermission().then((response) => {
  //       if (response == "granted") {
  //         window.addEventListener("deviceorientation", (event) => {
  //           rotation_degrees = event.alpha;
  //           frontToBack_degrees = event.beta;
  //           leftToRight_degrees = event.gamma;

  //           vx = vx + leftToRight_degrees * updateRate * 2;
  //           vy = vy + frontToBack_degrees * updateRate;

  //           px = px + vx * 0.5;
  //           if (px > 98 || px < 0) {
  //             px = Math.max(0, Math.min(98, px));
  //             vx = 0;
  //           }

  //           py = py + vy * 0.5;
  //           if (py > 98 || py < 0) {
  //             py = Math.max(0, Math.min(98, py));
  //             vy = 0;
  //           }

  //           dot = document.getElementsByClassName("indicatorDot")[0];
  //           dot.setAttribute("style", "left:" + px + "%;" + "top:" + py + "%;");
  //         });
  //       }
  //     });
  //   }
  // },
});
</script>
