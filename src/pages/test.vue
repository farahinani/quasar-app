<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="getAccel()"
      label="test getAccel()"
    >
    </q-btn>
    <div v-if="$q.platform.is.desktop">I'm only rendered on desktop!</div>

    <div v-if="$q.platform.is.mobile">I'm only rendered on mobile!</div>

    <div v-if="$q.platform.is.safari">I'm only rendered on safari!</div>

    <div v-if="$q.platform.is.iphone">I'm only rendered on safari!</div>

    <div v-if="$q.platform.is.ios">I'm only rendered on safari!</div>

    <div v-if="$q.platform.is.android">I'm only rendered on safari!</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";
import { useQuasar } from "quasar";

// let accelHandler: PluginListenerHandle;

export default defineComponent({
  name: "test",

  setup() {
    const $q = useQuasar();

    $q.platform.is.desktop;

    $q.platform.is.mobile;
  },

  methods: {
    getAccel() {
      var oldx = 0;
      var oldy = 0;

      var shakethreshold = 30;

      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          window.addEventListener("devicemotion", (event) => {
            // console.log(event);

            if (
              Math.abs(oldx - Math.round(event.acceleration.x)) >
                shakethreshold ||
              Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
            ) {
              //shaken, do something
              alert("shaken");
            }
            oldx = Math.round(accel.x);
            oldy = Math.round(accel.y);
          });

          window.addEventListener("deviceorientation", (event) => {
            console.log(event);
          });
        }
      });

      // if (window.DeviceMotionEvent) {
      //   window.addEventListener("devicemotion", function () {
      //     if (
      //       Math.abs(oldx - Math.round(event.acceleration.x)) >
      //         shakethreshold ||
      //       Math.abs(oldy - Math.round(event.acceleration.y)) > shakethreshold
      //     ) {

      //       alert("shaken");
      //     }
      //     oldx = Math.round(accel.x);
      //     oldy = Math.round(accel.y);
      //   });
      // }
    },
  },
});
</script>


