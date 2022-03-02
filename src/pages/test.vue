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
    <q-btn
      class="q-ma-xl"
      color="primary"
      label="Show / Hide"
      v-on:click="show = !show"
    />
    <transition-group
      appear
      enter-active-class="animated bounceInDown"
      leave-active-class="animated flipOutY"
      :duration="9000"
    >
      <q-card
        key="text"
        v-show="show"
        style="
          position: absolute;
          top: 100px;
          left: 100px;
          background-color: Salmon;
          width: 200px;
          height: 200px;
        "
        >Hello</q-card
      >
    </transition-group>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
//import { Shake } from "src/router/shake.js";
import { animate } from "src/pages/animate";
// var Shake = require("shake.js");
// var animate = require("animate.js");

export default defineComponent({
  name: "test",

  data() {
    return {
      show: true,
    };
  },

  // setup() {},

  // mounted() {
  //   this.onLoad();
  // },

  methods() {
    function makeEaseOut(timing) {
      return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
      };
    }

    function bounce(timeFraction) {
      for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return (
            -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
          );
        }
      }
    }

    ball.onclick = function () {
      let to = field.clientHeight - ball.clientHeight;

      animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
          ball.style.top = to * progress + "px";
        },
      });
    };

    // onLoad() {
    //   var myShakeEvent = new Shake({
    //     threshold: 15,
    //   });
    //   myShakeEvent.start();
    //   window.addEventListener("shake", shakeEventDidOccur, false);
    //   function shakeEventDidOccur() {
    //     alert("Shake!");
    //   }
    // },
  },
});
</script>


