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

            <div>
              <div>accelerometer: {{ accelerometer }}</div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";

export default defineComponent({
  name: "PageShakeWin",

  setup() {
    const accelerometer = ref("determining...");

    myButton.addEventListener("click", async () => {
      try {
        await DeviceMotionEvent.requestPermission();
      } catch (e) {
        //handle error
        return;
      }

      //once the user approve can start listening
      accelHandler = await Motion.addListener("accel", (event) => {
        console.log("Device motion event:", event);
      });

      //stop the acceleration listener
      const stopAcceleration = () => {
        if (accelHandler) {
          accelHandler.remove();
        }
      };

      //remove all listeners
      const removeListeners = () => {
        Motion.removeAllListeners();
      };
    });

    return {
      accelerometer,
    };
  },
});
</script>
