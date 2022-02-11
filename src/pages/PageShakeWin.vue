<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-h5 text-center">
              You have 2 tries
              <q-badge color="teal-10" align="middle"> 1/2 </q-badge>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageShakeWin",

  methods: {
    function() {
      var myShakeEvent = new Shake({
        threshold: 15,
      });

      myShakeEvent.start();

      window.addEventListener("shake", shakeEventDidOccur, false);

      alert("shake");
    },
  },
});
</script>
