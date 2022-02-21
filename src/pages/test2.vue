<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test 2 page</div>
          <q-btn @click="shakeTest()">test shake</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test2",

  data() {},

  setup() {
    window.onload = function () {
      var myShakeEvent = new Shake({
        shakethreshold: 15,
      });

      myShakeEvent.start();

      window.addEventListener("shake", shakeEventDidOccur, false);
      function shakeEventDidOccur() {
        alert("shaken");
      }
    };
  },

  methods: {
    shakeTest() {
      // alert("test shake 1");
      // window.onload = function () {
      //   var myShakeEvent = new Shake({
      //     threshold: 15,
      //   });
      //   myShakeEvent.start();
      //   window.addEventListener("devicemotion", shakeEventDidOccur, false);
      //   function shakeEventDidOccur() {
      //     console.log("test shake 2");
      //   }
      // };
      // window.onload = function () {
      //   var myShakeEvent = new Shake({
      //     threshold: 15,
      //   });
      //   myShakeEvent.start();
      //   window.addEventListener("shake", shakeEventDidOccur, false);
      //   function shakeEventDidOccur() {
      //     console.log("test shake 2");
      //   }
      // };
    },
  },
});
</script>
