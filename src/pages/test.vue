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

  setup() {
    var oldx = 0;
    var oldy = 0;

    var shakethreshold = 25;

    if (this.$root.triesCount < this.$root.numTries) {
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          window.addEventListener(
            "devicemotion",
            (event) => {
              if (
                Math.abs(oldx - Math.round(event.acceleration.x)) >
                  shakethreshold ||
                Math.abs(oldy - Math.round(event.acceleration.y)) >
                  shakethreshold
              ) {
                alert("shaken!");
                // if (this.$root.triesCount < this.$root.numTries) {
                //   alert("shaken !! : try " + this.$root.triesCount);
                //   this.$root.triesCount += 1;
                // } else {
                //   alert("finish shake");
                // }
              }
              oldx = Math.round(accel.x);
              oldy = Math.round(accel.y);
            },
            true
          );
        }
      });
    }
  },

  method() {},
});
</script>


