<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="getAccel()"
      label="test getAccel()"
    >
    </q-btn>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="myButton"
      label="test myButton()"
    >
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";

export default defineComponent({
  name: "test",

  methods: {
    getAccel() {
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          // Add a listener to get smartphone acceleration
          window.addEventListener("devicemotion", () => {
            // console.log(event);

            var myShakeEvent = new Shake({
              threshold: 15,
            });

            // start listening to device motion
            myShakeEvent.start();

            // register a shake event
            window.addEventListener("shake", shakeEventDidOccur, false);
          });

          // Add a listener to get smartphone orientation
          window.addEventListener("deviceorientation", (event) => {
            console.log(event);
          });

          //shake event callback
          function shakeEventDidOccur() {
            console.log("shake");
            alert("Shake!");
          }
        }
      });
    },
  },
});
</script>


