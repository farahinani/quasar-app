<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test page</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { Shake } from "src/router/shake.js";

export default defineComponent({
  name: "test",

  setup() {
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

  method() {},
});
</script>


