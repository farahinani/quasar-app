<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test page</div>
          <q-btn
            type="submit"
            label="SHAKE"
            color="primary"
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
import { Shake } from "src/router/shake.js";

export default defineComponent({
  name: "test",

  setup() {
    var myShakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000, // optional, determines the frequency of event generation
    });

    myShakeEvent.start();

    window.addEventListener("shake", shakeEventDidOccur, false);

    //function to call when shake occurs
    function shakeEventDidOccur() {
      //put your own code here etc.
      alert("shake!");
    }

    window.removeEventListener("shake", shakeEventDidOccur, false);

    myShakeEvent.stop();
  },

  methods: {},
});
</script>


