<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-center">
            <span class="text-h4"
              >SHAKE & WIN ANIMATION<br />
              <span class="text-h5">WITH FLORIDA'S NATURAL</span>
            </span>
            <hr />
            <br />
            <div class="text-h5 text-center">Purchase, Play and Win !</div>
          </div>

          <!-- BACK BUTTON -->
          <!-- router.go(n) where n can be + or -   -->
          <q-btn
            @click="$router.go(-1)"
            type="submit"
            fullwidth
            label="back"
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
  name: "PageAnimation",
});
</script>
