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
            <br />
          </div>
          <div class="q-py-lg q-px-md">
            <div class="text-h5 text-center">
              You have {{ $root.numTries }} tries
              <q-badge color="teal-10" align="middle">
                {{ $root.triesCount }}/{{ $root.numTries }}
              </q-badge>
            </div>
            <br />
            <div class="text-h5 text-center">
              <b>Try {{ $root.triesCount }}</b>
            </div>
            <br />
            <div class="body-text1 text-center">
              Shake your device <br />
              to see what you get!
            </div>
          </div>

          <!-- START SHAKE IOS BUTTON -->
          <div v-if="$q.platform.is.ios" v-on:click="hide = !hide">
            <p>
              <q-btn
                class="full-width"
                v-if="hide"
                color="primary"
                @click="requestPermission()"
                label="Start Shake"
              >
              </q-btn>
            </p>
          </div>

          <!-- START SHAKE ANDROID BUTTON -->
          <!-- <div v-if="$q.platform.is.android" v-on:click="hide = !hide">
            <p>
              <q-btn
                class="full-width"
                v-if="hide"
                color="primary"
                @click="shakeDetector()"
                label="Start Shake"
              >
              </q-btn>
            </p>
          </div> -->

          <!-- NEXT BUTTON -->
          <q-btn
            to="/home/shake-and-win/prizes"
            type="submit"
            fullwidth
            label="NEXT"
            color="primary"
            class="full-width"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { event } from "quasar";
var Shake = require("shake.js");

export default defineComponent({
  name: "PageShakeWin",

  data() {
    return {
      hide: true,
    };
  },

  // setup() {
  //   const $q = useQuasar();
  //   $q.platform.is.desktop;
  //   $q.platform.is.android;
  //   $q.platform.is.ios;

  //   if ($q.platform.is.ios) {
  //     //DETECT PERMISSION FOR DEVICE MOTION WHEN CLICK BUTTON 'START SHAKE'
  //     function requestPermission() {
  //       //IF PERMISSION IS GRANTED, EXECUTE getAccel()
  //       DeviceMotionEvent.requestPermission().then((response) => {
  //         if (response == "granted") {
  //           this.shakeDetector();
  //         }
  //       });
  //     }
  //     return {
  //       requestPermission,
  //     };
  //   } else if ($q.platform.is.android) {
  //     this.shakeDetector();
  //   } else {
  //     console.log("this is dekstop!");
  //   }
  // },

  mounted() {
    const $q = useQuasar();
    $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;

    if ($q.platform.is.ios) {
      //IF PERMISSION IS GRANTED, EXECUTE getAccel()
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          this.shakeDetector();
        }
      });
    } else if ($q.platform.is.android) {
      this.shakeDetector();
    } else {
      console.log("this is dekstop!");
    }
  },

  methods: {
    //old name is getAccel()
    shakeDetector() {
      var oldx = 0;
      var oldy = 0;
      var shakethreshold = 25;

      //CALCULATE TRIESCOUNT THEN SHAKE
      if (this.$root.triesCount < this.$root.numTries) {
        //LISTEN TO SHAKE MOTION
        window.addEventListener(
          "devicemotion",
          (event) => {
            if (
              Math.abs(oldx - Math.round(event.acceleration.x)) >
                shakethreshold ||
              Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
            ) {
              if (this.$root.triesCount < this.$root.numTries) {
                alert("shaken !! : try " + this.$root.triesCount);
                this.$root.triesCount += 1;
              } else {
                alert("finish shake");
              }
            }
            oldx = Math.round(accel.x);
            oldy = Math.round(accel.y);
          },
          true
        );
      }
    },
  },
});
</script>





