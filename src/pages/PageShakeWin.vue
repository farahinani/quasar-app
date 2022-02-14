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

            <q-btn color="primary" label="Get Permission" @click="click" />
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
  },
});
</script>
