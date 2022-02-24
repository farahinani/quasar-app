<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test page</div>
          <!-- <q-btn
            type="submit"
            label="SHAKE"
            color="primary"
            class="full-width"
            @click="shakeSuccess()"
          /> -->
          <!-- <button id="start" onclick="button">Approve</button> -->
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script type="text/javascript" src="shake.js">
import { defineComponent } from "vue";
//import { Shake } from "src/router/shake.js";
var Shake = require("shake.js");

export default defineComponent({
  name: "test",

  setup() {
    // var Shake = require("shake.js");
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
      }
    };
  },
});
</script>


