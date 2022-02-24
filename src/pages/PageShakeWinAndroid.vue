<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-center">
            <span class="text-h4"
              >SHAKE & WIN ANDROID <br />
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
  name: "PageShakeWinIos",

  data() {
    return {
      hide: true,
    };
  },

  setup() {
    // var oldx = 0;
    // var oldy = 0;
    // var shakethreshold = 10;
    // if (this.$root.triesCount < this.$root.numTries) {
    //   window.addEventListener(
    //     "devicemotion",
    //     (event) => {
    //       if (
    //         Math.abs(oldx - Math.round(event.acceleration.x)) >
    //           shakethreshold ||
    //         Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
    //       ) {
    //         // alert("shaken!");
    //         if (this.$root.triesCount < this.$root.numTries) {
    //           alert("shaken !! : try " + this.$root.triesCount);
    //           this.$root.triesCount += 1;
    //         } else {
    //           alert("finish shake");
    //         }
    //       }
    //       oldx = Math.round(accel.x);
    //       oldy = Math.round(accel.y);
    //     },
    //     true
    //   );
    // }
  },

  mounted() {
    this.onShake();
  },

  methods: {
    // shakeSuccess() {
    //   alert("test function");
    //   //JOANNE's code
    //   if (this.$root.triesCount < this.$root.numTries) {
    //     this.$root.triesCount++;
    //     if (this.$root.triesCount < this.$root.numTries) {
    //       alert("shaken !! : try " + this.$root.triesCount);
    //     } else {
    //       alert("Last Shake");
    //     }
    //   }
    // },

    onShake() {
      //create a new instance of shake.js.
      var myShakeEvent = new Shake({
        threshold: 10,
      });
      // start listening to device motion
      myShakeEvent.start();
      // register a shake event
      window.addEventListener("shake", shakeEventDidOccur, false);
      //shake event callback
      function shakeEventDidOccur() {
        // alert("shaken");
        if (this.$root.triesCount < this.$root.numTries) {
          this.$root.triesCount++;
          if (this.$root.triesCount < this.$root.numTries) {
            alert("shaken !! : try ");
          } else {
            alert("Last Shake");
          }
        }
      }
    },
  },
});
</script>





