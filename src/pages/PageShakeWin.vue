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
              <q-btn
                color="primary"
                label="Get Picture"
                @click="captureImage"
              />

              <img :src="imageSrc" />
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
    function requestDeviceMotion(callback) {
      if (window.DeviceMotionEvent == null) {
        callback(new Error("DeviceMotion is not supported"));
      } else if (DeviceMotionEvent.requestPermission) {
        DeviceMotionEvent.requestPermission().then(
          function (state) {
            if (state == "granted") {
              callback(null);
            } else callback(new Error("permission denied by user"));
          },
          function (err) {
            callback(err);
          }
        );
      } else {
        callback(null);
      }
    }

    function firstClick() {
      requestDeviceMotion(function (err) {
        if (err == null) {
          window.removeEventListener("click", firstClick);
          window.removeEventListener("touchend", firstClick);
          window.addEventListener("devicemotion", function (e) {
            // access e.acceleration, etc.
          });
        } else {
          // failed; a JS error object is stored in `err`
        }
      });
    }

    window.addEventListener("click", firstClick);
    window.addEventListener("touchend", firstClick);
  },
});
</script>
