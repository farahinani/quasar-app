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
      var oldx = 0;
      var oldy = 0;
      var shakethreshold = 10;

      if (window.DeviceMotionEvent) {
        window.addEventListener(
          "devicemotion",
          function () {
            if (
              Math.abs(oldx - Math.round(event.acceleration.x)) >
                shakethreshold ||
              Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
            ) {
              // shaken, do something
              alert("Shaken");
            }
            oldx = Math.round(accel.x);
            oldy = Math.round(accel.y);
          },
          true
        );
      }
    },
  },
});
</script>
