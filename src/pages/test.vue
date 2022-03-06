<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <!-- <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test page</div>

          <Transition
            appear
            name="nested"
            enter-active-class="animate__animated animate__bounceInDown"
            leave-active-class="animate__animated animate__bounceOut"
          >
            <div v-if="show" class="outer">
              orange
              <Transition
                :duration="1000"
                name="nested"
                enter-active-class="animate__animated animate__bounce"
                leave-active-class="animate__animated animate__zoomOutDown"
              >
                <div class="inner">popup</div>
              </Transition>
            </div>
          </Transition>


          <transition
            :duration="1550"
            appear
            name="nested"
            enter-active-class="animate__animated animate__bounceInDown"
            leave-active-class="animate__animated animate__zoomOutDown"
          >
            <div v-if="show" class="outer">
              orange

              <transition
                name="fade"
                enter-active-class="animate__animated animate__bounce"
                leave-active-class="animate__animated animate__zoomOutDown"
              >
                <div v-if="show" class="inner">orange popup</div>
              </transition>
            </div>
          </transition>

          <modal v-if="showModal" @close="showModal = false"></modal>
          <button class="button" @click="showModal = true">Show Modal</button>
        </q-card-section>
      </q-card> -->

      <q-card class="my-card">
        <q-card-section>
          <div class="text-center">
            <div class="flex flex-center" style="height: 450px">
              <transition-group
                appear
                name="nested"
                enter-active-class="animate__animated animate__bounceInDown"
                leave-active-class="animate__animated animate__bounceOutDown"
              >
                <div v-if="show">
                  <!-- <q-img width="70%" v-show="show" src="~assets/orange.png" />
                     -->
                  <img
                    style="width: 40%"
                    v-bind:src="require('assets/orange.png')"
                  />

                  <transition-group
                    name="nested"
                    enter-active-class="animate__animated animate__bounce"
                    leave-active-class="animate__animated animate__bounceOutDown"
                  >
                    <div v-if="show" class="inner"></div>
                  </transition-group>
                </div>
              </transition-group>
            </div>
          </div>
          <q-btn
            type="submit"
            fullwidth
            class="full-width"
            color="secondary"
            label="Show / Hide"
            v-on:click="show = !show"
          />
        </q-card-section>
      </q-card>
    </div>
    <br />
    <!-- <button @click="show = !show">Toggle</button> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { animate } from "src/pages/animate";
import "animate.css";

export default defineComponent({
  name: "test",

  data() {
    return {
      show: true,
      showContent: false,
      showModal: false,
    };
  },

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

    // ball.onclick = function() {

    //   let to = field.clientHeight - ball.clientHeight;

    //   animate({
    //     duration: 2000,
    //     timing: makeEaseOut(bounce),
    //     draw(progress) {
    //       ball.style.top = to * progress + 'px'
    //     }
    //   });

    // };
  },
});
</script>

<style>
/* .outer {
  background: salmon;
  width: 70px;
  height: 70px;
  border-radius: 100%;
} */
.inner {
  background: white;
  width: 150px;
  height: 150px;
  border: 10px solid orange;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition-delay: 2.5s;
}

.nested-enter-active {
  transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>

