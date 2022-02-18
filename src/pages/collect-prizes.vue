<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-center">
            <span class="text-h4"
              >SHAKE & WIN <br />
              <span class="text-h5">WITH FLORIDA'S NATURAL</span>
            </span>
            <hr />
          </div>
          <div class="q-py-lg q-px-md">
            <div class="text-h6 text-center">
              Please approach our <br />promoter and
              <b
                >show them<br />
                this page and your receipt </b
              ><br />
              collect your prizes*
            </div>
            <br />
            <q-icon name="print" color="teal" size="6em" />
            <q-icon name="today" class="text-orange" size="6em" />
            <q-icon name="style" size="6em" />
          </div>

          <br />
          <div class="text-body1">Entry: 1</div>
          <hr />
          <div class="text-body1">Cartons Purchased: 4</div>
          <hr />
          <div class="text-body1">Receipt: 154654654654654</div>
          <hr />
        </q-card-section>
      </q-card>

      <!-- <q-btn
        type="submit"
        label="SHAKE"
        color="primary"
        class="full-width"
        @click="shakeSuccess()"
      /> -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "test2",

  setup() {
    const $q = useQuasar();

    $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;

    if ($q.platform.is.ios) {
      // alert("alert: this is ios");
      //console.log("msg: this is desktop");

      function getAccel() {
        var oldx = 0;
        var oldy = 0;

        var shakethreshold = 25;

        DeviceMotionEvent.requestPermission().then((response) => {
          if (response == "granted") {
            window.addEventListener("devicemotion", (event) => {
              if (
                Math.abs(oldx - Math.round(event.acceleration.x)) >
                  shakethreshold ||
                Math.abs(oldy - Math.round(event.acceleration.y)) >
                  shakethreshold
              ) {
                //shaken, do something
                alert("shaken !");
                if (this.$root.triesCount < this.$root.numTries) {
                  this.$root.triesCount++;
                  alert("shaken !! : try " + this.$root.triesCount);
                }
              }
              oldx = Math.round(accel.x);
              oldy = Math.round(accel.y);
            });

            // window.addEventListener("deviceorientation", (event) => {
            //   console.log(event);
            // });
          }
        });
      }

      return {
        getAccel,
      };
    } else if ($q.platform.is.android) {
      // alert("This is android!");

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
          if (this.$root.triesCount < this.$root.numTries) {
            this.$root.triesCount++;
            alert("shaken !! : try " + this.$root.triesCount);
          }
        }
        oldx = Math.round(accel.x);
        oldy = Math.round(accel.y);
      });
    } else {
      // alert("this is dekstop!");
    }
  },

  methods: {
    shakeListen() {
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
          shakeSuccess();
        }
        oldx = Math.round(accel.x);
        oldy = Math.round(accel.y);
      });
    },

    shakeSuccess() {
      if (this.$root.triesCount < this.$root.numTries) {
        this.$root.triesCount++;

        if (this.$root.triesCount < this.$root.numTries) {
          alert("shaken !! : try " + this.$root.triesCount);
        } else {
          alert("Last Shake");
        }
      }
    },
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
