<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-center"></div>
          <div class="q-py-lg q-px-md">
            <div class="text-h6 text-center text-primary">
              Please enter how many cartons you have purchased in
              your&nbsp;receipt*
            </div>
            <div class="text-body2 text-center text-primary">
              *Redemption is determined by purchases within a single receipt
            </div>

            <br />

            <q-form @submit.prevent="submitForm">
              <q-input
                min="0"
                type="number"
                outlined
                bottom-slots
                clearable
                v-model="this.$root.cartonInput"
                :rules="[(val) => !!val || 'Please enter cartons']"
              />
              <div>
                <q-btn
                  type="submit"
                  label="Submit"
                  color="secondary"
                  class="full-width text-h5 text-weight-bold"
                  push
                  :disable="!this.$root.cartonInput"
                  @click="submitForm()"
                />
              </div>
              <br />
              <div class="text-left text-primary">
                Uncertain about where to find your Receipt Number?
                <a color="primary" @click="alert = true">Click here</a>
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Receipt example</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
          <br />
          <img style="width: 60vw" v-bind:src="require('assets/receipt.png')" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",

  data() {
    return {
      cartonInput: "",
      numTries: "",
      card: false,
      alert: false,
    };
  },

  methods: {
    //CALCULATE NUMBER OF TRIES
    submitForm() {
      let numPacks = this.$root.cartonInput;
      let numTries = numPacks / 2;

      if (numTries < 1) {
        alert("please purchase at least 2 packs");
      } else {
        let numTriesInt = Math.floor(numTries);

        this.$root.numTries = numTriesInt;
        this.$router.push("/shake-and-win");
      }
    },
  },
});
</script>

<style>
</style>
