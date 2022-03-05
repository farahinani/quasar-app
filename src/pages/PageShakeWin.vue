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
          <q-btn label="Auto Closing" color="primary" @click="autoClose" />

          <!-- SHAKESUCCESS() BUTTON -->
          <q-btn
            type="submit"
            fullwidth
            label="shakeSuccess()"
            color="secondary"
            class="full-width"
            @click="shakeSuccess()"
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
import test2 from "src/pages/test2.vue";

var Shake = require("shake.js");

export default defineComponent({
  name: "PageShakeWin",

  computed() {
    return this.$root.triesCount;
  },

  data() {
    return {
      alert: false,
      hide: true,
    };
  },

  setup() {
    const $q = useQuasar();

    function autoClose() {
      let seconds = 3;

      const dialog = $q

        .dialog({
          component: test2,
          // title: "Alert",
          // message: `Autoclosing in ${seconds} seconds.`,

          componentProps: {
            //text: "something",
            // ...more..props...
          },
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          clearTimeout(timer);
          // console.log('I am triggered on both OK and Cancel')
        });

      const timer = setInterval(() => {
        seconds--;

        if (seconds > 0) {
          dialog.update({
            message: `Autoclosing in ${seconds} second${
              seconds > 1 ? "s" : ""
            }.`,
          });
        } else {
          clearInterval(timer);
          dialog.hide();
        }
      }, 1000);
    }

    return {
      autoClose,
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
      this.shakeDetector();
    } else {
      console.log("this is dekstop!");
    }
  },

  methods: {
    //REQUEST PERMISSION FOR IOS TO LISTEN TO DEVICEMOTION
    requestPermission() {
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          this.shakeDetector();
        }
      });
    },

    //SHAKE FUNCTION -- ALEXGIBSON.IO
    shakeDetector() {
      //create a new instance of shake.js.
      var myShakeEvent = new Shake({
        threshold: 15,
      });
      // start listening to device motion
      myShakeEvent.start();
      // register a shake event
      window.addEventListener(
        "shake",
        () => {
          if (this.$root.triesCount < this.$root.numTries) {
            this.$root.triesCount++;
            //show pop up orange
            this.autoClose();
          } else if (this.$root.triesCount == this.$root.numTries) {
            //set everything to 0
            this.$root.triesCount = 0;
            this.$root.numTries = 0;
            //show pop up orange
            this.autoClose();
            //after finish shake, set time to go to next page
            setTimeout(() => {
              this.$router.push("/home/shake-and-win/prizes");
            }, 3000);

            // stop listening for shake events
            window.removeEventListener("shake", () => {}, false);
            //stop listening to device motion
            myShakeEvent.stop();
          }
        },
        false
      );
    },

    //TEST BUTTON FOR SHAKE
    shakeSuccess() {
      //alert("shakeeeee");
      if (this.$root.triesCount < this.$root.numTries) {
        this.$root.triesCount++;
        this.autoClose();
        // alert("this.$root.triesCount : " + this.$root.triesCount);
        //this.$refs.dialog.show();
        //this.$router.push("/home/shake-and-win/animation");
      } else if (this.$root.triesCount == this.$root.numTries) {
        this.$root.triesCount = 0;
        this.$root.numTries = 0;
        this.autoClose();

        setTimeout(() => {
          this.$router.push("/home/shake-and-win/prizes");
        }, 3000);

        //alert("finish shake");
      } else {
        alert("no shake");
      }
    },
  },
});
</script>





