<template>
  <div>
    <q-btn
      id="accelPermsButton"
      color="primary"
      label="test btn"
      @click="myButton"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";

// let accelHandler: PluginListenerHandle;

export default defineComponent({
  name: "test",

  methods() {
    async function mybutton() {
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
        stopAcceleration,
        removeListeners,
        mybutton,
      };
    }
  },
});
</script>


