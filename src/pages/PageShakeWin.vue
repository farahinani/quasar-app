<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card bg-transparent no-border no-box-shadow">
        <q-card-section v-bind:class="{ dialogHide: this.$root.dialogOpen }">
          <div class="q-py-lg q-px-md">
            <div class="text-body1 text-center text-primary text-weight-bold">
              You have {{ this.$root.numTries }} tries
              <q-badge color="primary" align="middle">
                {{ this.$root.triesCount }}/{{ this.$root.numTries }}
              </q-badge>
            </div>
            <br />
            <div class="text-h4 text-center text-primary">
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
          <div v-if="$q.platform.is.desktop" v-on:click="hide = !hide">
            <q-btn
              type="submit"
              fullwidth
              label="shakeSuccess()"
              color="secondary"
              class="full-width"
              @click="shakeSuccess()"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
import { date } from "quasar";

import PageAutoClosePopup from "src/pages/PageAutoClosePopup.vue";

var Shake = require("shake.js");

export default defineComponent({
  name: "PageShakeWin",

  data() {
    return {
      alert: false,
      hide: true,
      info: null,
      itemTypeImage: "test",
    };
  },

  setup() {
    //FUNCTION FOR AUTO CLOSE POP-UP, CALLING FROM PAGE TEST2.VUE
    const $q = useQuasar();

    function autoClosePopup() {
      this.$root.dialogOpen = true;

      let seconds = 2;

      const dialog = $q

        .dialog({
          component: PageAutoClosePopup,
          // title: "Alert",
          // message: `Autoclosing in ${seconds} seconds.`,

          componentProps: {
            text: this.itemTypeImage,
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
          this.$root.dialogOpen = false;
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
      }, 2500); //close in 2500secs
    }

    return {
      autoClosePopup,
    };
  },

  mounted() {
    this.getData();

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
    getData() {
      axios
        .get("https://swapi.lightningpress.studio/getinventory.php")
        .then((response) => {
          this.info = response;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
          this.parseData();
        });
    },
    parseData() {
      let str = this.info.data;
      let rawData = str.split(" ", 4);

      let inventoryData = [];

      for (let i = 0; i < rawData.length; i++) {
        let text = rawData[i];
        let result = text.replace(/'/g, '"');
        let a = JSON.parse(result);

        inventoryData.push(a);

        inventoryData[i].quantity = parseInt(inventoryData[i].quantity);
      }

      this.$root.inventory = inventoryData;
    },

    //REQUEST PERMISSION FOR IOS TO LISTEN TO DEVICEMOTION
    requestPermission() {
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
              this.$router.push("/prizes");
            }, 3500);

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

      console.log(item, itemType);

      this.itemTypeImage = this.$root.prizesWon[0].image;

      //reduce inventory

      if (itemType == "coolerBag") {
        this.$root.inventory[item].quantity--;
        this.$root.prizesWon[0].quantity++;
        this.itemTypeImage = this.$root.prizesWon[0].image;
      } else if (itemType == "masonJar") {
        this.$root.inventory[item].quantity--;
        this.$root.prizesWon[1].quantity++;
        this.itemTypeImage = this.$root.prizesWon[1].image;
      } else if (itemType == "coinPouch") {
        this.$root.inventory[item].quantity--;
        this.$root.prizesWon[2].quantity++;
        this.itemTypeImage = this.$root.prizesWon[2].image;
      } else if (itemType == "orangeJuice") {
        this.$root.inventory[item].quantity--;
        this.$root.prizesWon[3].quantity++;
        this.itemTypeImage = this.$root.prizesWon[3].image;
      } else {
        return;
      }
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
          this.$router.push("/prizes");
        }, 3500);
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
.q-dialog__inner--minimized {
  padding: 0;
}
.q-dialog__backdrop {
  background: none;
}
.q-card.q-dialog-plugin.bg-transparent {
  height: 100vh;
  max-height: 100vh !important;
}
.dialogHide {
  display: none;
}
.text-body1.text-center.text-primary.text-weight-bold {
  background: rgba(255, 255, 255, 0.8);
}
</style>



