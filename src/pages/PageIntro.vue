<template>
  <!-- <q-page>
    <h5>Purchase, Play and win !</h5>
    <div>
      <q-btn to="/home" push color="primary" label="Home" type="submit" />
    </div>
  </q-page> -->
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-center">
            <span class="text-h4"
              >SHAKE & WIN <br />
              <span class="text-h5">WITH FLORIDA'S NATURAL</span>
            </span>
            <hr />
            <br />
            <div class="text-h5 text-center">Purchase, Play and Win !</div>
          </div>
          <br />
          <p class="text-center">
            It's simple, every purchase of 2<br />
            1.5l packs of Florida's Natural<br />
            Not From Concentrate Juices<br />
            gives you a chance to win great prizes!
          </p>

          <!-- DISPLAY FOR DESKTOP -->
          <div
            class="q-py-lg q-px-md text-center text-weight-thin text-body2"
            v-if="$q.platform.is.desktop"
          >
            shake function is not support for desktop yet, <br />please try on
            iOS/android<br />
          </div>

          <!-- BUTTON FOR NEXT PAGE CODE -->
          <q-btn
            to="/home"
            type="submit"
            fullwidth
            label="I have made my purchase & have my receipt ready"
            color="primary"
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
