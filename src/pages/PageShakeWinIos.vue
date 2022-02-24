<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-center">
            <span class="text-h4"
              >SHAKE & WIN IOS <br />
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

          <!-- DISPLAY BUTTON FOR IOS -->
          <!-- <div v-if="$q.platform.is.ios">
            <div v-on:click="hide = !hide">
              <p>
                <q-btn
                  class="full-width"
                  v-if="hide"
                  color="primary"
                  @click="this.$mounted.getPermission()"
                  label="Start Shake"
                >
                </q-btn>
              </p>
            </div>
          </div> -->
          <div v-on:click="hide = !hide">
            <p>
              <q-btn
                class="full-width"
                v-if="hide"
                color="primary"
                @click="this.$mounted.getPermission()"
                label="Start Shake"
              >
              </q-btn>
            </p>
          </div>

          <!-- BUTTON FOR NEXT PAGE CODE -->
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
  name: "PageShakeWinAndroid",

  data() {
    return {
      hide: true,
    };
  },

  setup() {
    // alert("alert: this is ios");
    function getAccel() {
      var oldx = 0;
      var oldy = 0;
      var shakethreshold = 25;
      //CALCULATE TRIESCOUNT THEN SHAKE
      if (this.$root.triesCount < this.$root.numTries) {
        //DETECT PERMISSION FOR DEVICE MOTION WHEN CLICK BUTTON 'START SHAKE'
        DeviceMotionEvent.requestPermission().then((response) => {
          //IF PERMISSION IS GRANTED, LISTEN TO SHAKE
          if (response == "granted") {
            //LISTEN TO SHAKE MOTION
            window.addEventListener(
              "devicemotion",
              (event) => {
                // this.$root.triesCount++; //loop number like forever
                if (
                  Math.abs(oldx - Math.round(event.acceleration.x)) >
                    shakethreshold ||
                  Math.abs(oldy - Math.round(event.acceleration.y)) >
                    shakethreshold
                ) {
                  // alert("shaken !");
                  if (this.$root.triesCount < this.$root.numTries) {
                    alert("shaken !! : try " + this.$root.triesCount);
                    // this.$root.triesCount++; // this works fine but starting is try 0?
                    this.$root.triesCount += 1;
                  } else {
                    // alert("Last Shake");
                    alert("finish shake"); // go to home
                  }
                  // this.$root.triesCount++; //the count keep increasing when click shake
                }
                oldx = Math.round(accel.x);
                oldy = Math.round(accel.y);
                // this.$root.triesCount++; //only display alert equals to numtries
              },
              true
            );
            // this.$root.triesCount++; // need to press button everytime wants to shake
          }
          // this.$root.triesCount++; // need to press button if wants to shake
        });
      }
      //-------------------ORIGINAL CODE HERE---------------------------------//
      // DeviceMotionEvent.requestPermission().then((response) => {
      //   if (response == "granted") {
      //     window.addEventListener("devicemotion", (event) => {
      //       if (
      //         Math.abs(oldx - Math.round(event.acceleration.x)) >
      //           shakethreshold ||
      //         Math.abs(oldy - Math.round(event.acceleration.y)) >
      //           shakethreshold
      //       ) {
      //         alert("shaken !");
      //       }
      //       oldx = Math.round(accel.x);
      //       oldy = Math.round(accel.y);
      //     });
      //     window.addEventListener("deviceorientation", (event) => {
      //       console.log(event);
      //     });
      //   }
      // });
    }
    return {
      getAccel,
    };
  },

  // mounted() {
  //   const $q = useQuasar();

  //   $q.platform.is.desktop;
  //   $q.platform.is.android;
  //   $q.platform.is.ios;

  //   if ($q.platform.is.ios) {
  //     alert("ios");
  //   } else if ($q.platform.is.android) {
  //     this.onShake();
  //   } else {
  //     alert("desktop");
  //   }
  // },

  // methods: {
  //   // shakeSuccess() {
  //   //   alert("test function");
  //   //   //JOANNE's code
  //   //   if (this.$root.triesCount < this.$root.numTries) {
  //   //     this.$root.triesCount++;
  //   //     if (this.$root.triesCount < this.$root.numTries) {
  //   //       alert("shaken !! : try " + this.$root.triesCount);
  //   //     } else {
  //   //       alert("Last Shake");
  //   //     }
  //   //   }
  //   // },

  //   onShake() {
  //     //create a new instance of shake.js.
  //     var myShakeEvent = new Shake({
  //       threshold: 15,
  //     });

  //     // start listening to device motion
  //     myShakeEvent.start();

  //     // register a shake event
  //     window.addEventListener("shake", shakeEventDidOccur, false);

  //     //shake event callback
  //     function shakeEventDidOccur() {
  //       // alert("shaken");
  //       if (this.$root.triesCount < this.$root.numTries) {
  //         this.$root.triesCount++;
  //         if (this.$root.triesCount < this.$root.numTries) {
  //           alert("shaken !! : try ");
  //         } else {
  //           alert("Last Shake");
  //         }
  //       }
  //     }
  //   },
  // },
});
</script>





