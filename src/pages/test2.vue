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
              You have {{ this.$root.numTries }} tries
              <q-badge color="teal-10" align="middle">
                {{ this.$root.triesCount }}/{{ this.$root.numTries }}
              </q-badge>
            </div>
            <br />
            <div class="text-h5 text-center">
              <!-- <b>Try {{ trialNumber }}</b> -->
              <b>Try {{ this.$root.triesCount }}</b>
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
                @click.once="requestPermission()"
                label="Start Shake"
              >
              </q-btn>
            </p>
          </div>

          <!-- NEXT BUTTON -->
          <!-- <q-btn
            to="/home/shake-and-win/prizes"
            type="submit"
            fullwidth
            label="NEXT"
            color="primary"
            class="full-width"
          /> -->

          <!-- SHAKESUCCESS() BUTTON -->
          <q-btn
            type="submit"
            fullwidth
            label="shakeSuccess()"
            color="secondary"
            class="full-width"
            @click="shakeSuccess()"
          />

          test: {{ this.$root.triesCount }} <br />
          question: {{ this.question }} <br />
          shake Count: {{ this.shakeCount }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";

var Shake = require("src/pages/shake.js");

export default defineComponent({
  name: "test2",

  data() {
    return {
      alert: false,
      seen: true,
      hide: true,
    };
  },

  mounted() {
    const $q = useQuasar();
    $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;

    if ($q.platform.is.ios) {
      this.requestPermission();
    } else if ($q.platform.is.android) {
      this.shakeAlex();
    } else {
      console.log("this is dekstop!");
    }
  },

  methods: {
    requestPermission() {
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          this.shakeAlex();
        }
      });
    },

    shakeAlex() {
      window.onload = function () {
        //create a new instance of shake.js.
        var myShakeEvent = new Shake({
          threshold: 15,
        });

        // start listening to device motion
        myShakeEvent.start();

        // register a shake event
        window.addEventListener("shake", shakeEventDidOccur, false);

        //shake event callback
        function shakeEventDidOccur() {
          //put your own code here etc.
          alert("Shake!");
          this.$router.push("/home/shake-and-win/animation");
        }

        // window.removeEventListener("shake", shakeEventDidOccur, false);

        // myShakeEvent.stop();
      };
    },
  },
});
</script>
