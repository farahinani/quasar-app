<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-center">
            <span class="text-h4">SHAKE & WIN ANIMATION </span>
            <hr />
            <div style="margin-top: 22em">
              <transition-group
                appear
                enter-active-class="animated bounceInDown"
                leave-active-class="animated zoomOutDown"
              >
                <q-card
                  key="ball-card"
                  v-show="show"
                  style="
                    position: absolute;
                    top: 186px;
                    left: 126px;
                    background-color: Salmon;
                    width: 60px;
                    height: 60px;
                    border-radius: 100px;
                  "
                  >Hello</q-card
                >
                <q-btn
                  type="submit"
                  fullwidth
                  class="full-width"
                  color="secondary"
                  label="Show / Hide"
                  v-on:click="show = !show"
                />
              </transition-group>
            </div>
          </div>

          <!-- <div id="field">
            <img
              src="https://js.cx/clipart/ball.svg"
              width="40"
              height="40"
              id="ball"
              @click="ball"
            />
          </div> -->

          <br />
          <!-- MODAL POPUP -->

          <!-- BACK BUTTON -->
          <!-- router.go(n) where n can be + or -   -->
          <q-btn
            @click="$router.go(-1)"
            type="submit"
            fullwidth
            label="back"
            color="primary"
            class="full-width"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { animate } from "src/pages/animate";
export default defineComponent({
  name: "PageAnimation",

  data() {
    return {
      show: true,
      opened: false,
    };
  },

  methods() {
    // function makeEaseOut(timing) {
    //   return function (timeFraction) {
    //     return 1 - timing(1 - timeFraction);
    //   };
    // }
    // function bounce(timeFraction) {
    //   for (let a = 0, b = 1; 1; a += b, b /= 2) {
    //     if (timeFraction >= (7 - 4 * a) / 11) {
    //       return (
    //         -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    //       );
    //     }
    //   }
    // }
    // ball.onclick = function () {
    //   let to = field.clientHeight - ball.clientHeight;
    //   animate({
    //     duration: 2000,
    //     timing: makeEaseOut(bounce),
    //     draw(progress) {
    //       ball.style.top = to * progress + "px";
    //     },
    //   });
    // };
  },
});
</script>


