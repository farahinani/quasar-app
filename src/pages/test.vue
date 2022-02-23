<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test page</div>
          <button id="start">Approve</button>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test",

  setup() {},

  method() {
    var myShakeEvent = new Shake({
      threshold: 10, // optional shake strength threshold
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
});
</script>


