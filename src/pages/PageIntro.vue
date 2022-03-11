<template>
  <!-- <q-page class="flex justify-center item-center"> -->
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h5 text-center text-primary">
            Purchase, Play and Win !
          </div>

          <br />
          <p class="text-center text-primary">
            It's simple, every purchase of 2<br />
            1.5l packs of
            <b
              >Florida's Natural<br />
              Not From Concentrate Juices</b
            ><br />
            gives you a chance to win great prizes!
          </p>

          <!-- DISPLAY FOR DESKTOP -->
          <div
            class="q-py-lg q-px-md text-center text-weight-thin text-body2"
            v-if="$q.platform.is.desktop"
          >
            shake function is not support for desktop yet, <br />please try on
            iOS/android
          </div>
          <br />

          <!-- NEXT BUTTON -->
          <q-btn
            v-if="$q.platform.is.ios || $q.platform.is.android"
            to="/home"
            type="submit"
            fullwidth
            label="I have made my purchase & have my receipt ready"
            color="secondary"
            class="full-width"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIntro",
});
</script>

<style>
</style>