<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card bg-transparent">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-body1 text-center text-primary text-weight-bold">
              You have {{ this.$root.numTries }} tries
              <q-badge color="primary" align="middle">
                {{ this.$root.triesCount }}/{{ this.$root.numTries }}
              </q-badge>
            </div>
            <br />
            <div class="text-h4 text-center text-primary">
              <!-- <b>Try {{ trialNumber }}</b> -->
              <b>TRY {{ this.$root.triesCount }}</b>
            </div>
            <div class="text-h5 text-center text-primary">
              Shake your device <br />
              to see what you get!
            </div>
            <br />
            <div class="icon-shake">
              <img
                id="icon-phone-shake"
                v-bind:src="require('assets/icon-phone-shake.png')"
              />
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

          <!-- SHAKESUCCESS() BUTTON -->
          <q-btn
            type="submit"
            fullwidth
            label="shakeSuccess()"
            color="secondary"
            class="full-width"
            @click="shakeSuccess()"
          /><br /><br />
          <q-btn
            type="submit"
            fullwidth
            label="Select prizes"
            color="info"
            class="full-width"
            @click="selectPrizeRandom()"
          />
          item you get:
          <!-- <p>{{ this.itemType }}</p> -->
          <br />
          images:
          <br />
          <img v-if="$root.inventory" :src="this.itemType" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { event } from "quasar";
import PageAutoClosePopup from "src/pages/PageAutoClosePopup.vue";

var Shake = require("shake.js");

export default defineComponent({
  name: "PageShakeWin",

  computed: {
    // return this.$root.triesCount;
  },

  data() {
    // this.$root.inventory;
    return {
      alert: false,
      hide: true,
    };
  },

  setup() {
    //FUNCTION FOR AUTO CLOSE POP-UP, CALLING FROM PAGE TEST2.VUE
    const $q = useQuasar();

    function autoClosePopup() {
      let seconds = 3;

      const dialog = $q

        .dialog({
          component: PageAutoClosePopup,
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
      }, 2500); //close in Xsecs
    }

    return {
      autoClosePopup,
    };
  },

  mounted() {
    //DETECT USER PLATFORM
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
      // DeviceMotionEvent.requestPermission()
      //   .then((response) => {
      //     if (response == "granted") {
      //       console.log(response);
      //       this.shakeDetector();
      //     }
      //   })
      //   .catch(console.error)
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              this.shakeDetector();
            }
          })
          .catch(console.error);
        //catch error
      }
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
            this.selectPrizeRandom();

            // Display pop up
            this.autoClosePopup();
            // update tries count
            this.$root.triesCount++;
          } else {
            this.selectPrizeRandom();

            // Display pop up (final)
            this.autoClosePopup();
            //after shake, go to next page in 3secs
            setTimeout(() => {
              this.$router.push("/home/shake-and-win/prizes");
            }, 5000);

            // stop listening for shake events
            window.removeEventListener("shake", () => {}, false);
            //stop listening to device motion
            myShakeEvent.stop();
          }
        },
        false
      );
    },

    checkInventory() {
      this.$root.inventoryAvaliable = [];

      for (let i = 0; i < this.$root.inventory.length; i++) {
        let a = this.$root.inventory[i];
        console.log(a);
        if (a.quantity > 0) {
          this.$root.inventoryAvaliable.push(a);
        }
      }
    },

    selectPrizeRandom() {
      this.checkInventory();

      let itemsAvaliable = this.$root.inventoryAvaliable.length;
      let item = Math.floor(Math.random() * itemsAvaliable); //random calculation
      let itemType = this.$root.inventoryAvaliable[item].type;

      console.log("you won ! id:" + item + " = " + itemType);

      //reduce inventory

      if (itemType == "Cooler Bag") {
        this.$root.inventory[item].quantity--;
        this.$root.prizesWon[0].quantity++;
      } else if (itemType == "Mason Jar") {
        this.$root.inventory[item].quantity--;
        this.$root.prizesWon[1].quantity++;
      } else if (itemType == "Coin Pouch") {
        this.$root.inventory[item].quantity--;
        this.$root.prizesWon[2].quantity++;
      } else if (itemType == "Orange Juice") {
        this.$root.inventory[item].quantity--;
        this.$root.prizesWon[3].quantity++;
      } else {
        return;
      }
      //display on HTML
      this.itemType = this.$root.inventory[item].image;
    },

    //TEST BUTTON FOR SHAKE
    shakeSuccess() {
      if (this.$root.triesCount < this.$root.numTries) {
        this.selectPrizeRandom();

        this.autoClosePopup();

        console.log("shake : " + this.$root.triesCount);

        this.$root.triesCount++;
      } else {
        this.selectPrizeRandom();

        this.autoClosePopup();

        console.log("final shake ! : " + this.$root.triesCount);

        setTimeout(() => {
          this.$router.push("/home/shake-and-win/prizes");
        }, 5000);
      }
    },
  },
});
</script>

<style>
.icon-shake {
  position: relative;
}
#icon-phone-shake {
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>



