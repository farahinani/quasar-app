<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        page test 2

        <q-card-section>
          <q-btn
            type="submit"
            fullwidth
            label="shakeSuccess()"
            color="secondary"
            class="full-width"
            @click="shakeAlex()"
        /></q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import test3 from "src/pages/test3.vue";
//import { Shake } from "src/pages/shake.js";
var Shake = require("src/pages/shake.js");

export default defineComponent({
  name: "test2",

  data() {
    return {
      alert: false,
      seen: true,
    };
  },

  // setup() {
  //   const $q = useQuasar();

  //   $q.dialog({
  //     component: test3,
  //   })
  //     .onOk(() => {
  //       console.log("OK");
  //     })
  //     .onCancel(() => {
  //       console.log("Cancel");
  //     })
  //     .onDismiss(() => {
  //       console.log("Called on OK or Cancel");
  //     });
  // },

  mounted() {
    this.shakeAlex();
  },

  methods: {
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

        window.removeEventListener("shake", shakeEventDidOccur, false);

        myShakeEvent.stop();
      };
    },
  },
});
</script>
