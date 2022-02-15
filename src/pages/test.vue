<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      @click="getAccel()"
      label="test btn"
    >
    </q-btn>
    <q-btn color="primary" @click="myButton" label="test btn 2"> </q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";

export default defineComponent({
  name: "test",

  methods() {
    function getAccel() {
      DeviceMotionEvent.requestPermission().then((response) => {
        if (response == "granted") {
          // Add a listener to get smartphone acceleration
          // in the XYZ axes (units in m/s^2)
          window.addEventListener("devicemotion", (event) => {
            console.log(event);
          });
          // Add a listener to get smartphone orientation
          // in the alpha-beta-gamma axes (units in degrees)
          window.addEventListener("deviceorientation", (event) => {
            console.log(event);
          });
        }
      });
    }

    myButton.addEventListener("click", async () => {
      try {
        await DeviceMotionEvent.requestPermission();
      } catch (e) {
        // Handle error
        return;
      }

      // Once the user approves, can start listening:
      accelHandler = await Motion.addListener("accel", (event) => {
        console.log("Device motion event:", event);
      });
    });

    // Stop the acceleration listener
    const stopAcceleration = () => {
      if (accelHandler) {
        accelHandler.remove();
      }
    };

    // Remove all listeners
    const removeListeners = () => {
      Motion.removeAllListeners();
    };

    return {
      getAccel,
      stopAcceleration,
      removeListeners,
    };
  },
});
</script>


