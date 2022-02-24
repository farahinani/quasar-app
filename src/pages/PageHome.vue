<template>
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
          </div>
          <div class="q-py-lg q-px-md">
            <div class="text-h5 text-center">
              Please enter how many cartons you have purchased in
              your&nbsp;receipt*
            </div>

            <div class="text-subtitle1 text-center">
              *Redemption is determined by purchases within a single receipt
            </div>

            <br />

            <q-form @submit.prevent="submitForm">
              <q-input
                min="0"
                type="number"
                placeholder="Enter cartons purchased"
                outlined
                bottom-slots
                clearable
                v-model="formData.cartonInput"
                :rules="[(val) => !!val || 'Please enter cartons']"
              />

              <div>
                <q-btn
                  to="/home/shake-and-win"
                  type="submit"
                  label="Submit"
                  color="primary"
                  class="full-width"
                  push
                  :disable="!formData.cartonInput"
                  @click="submitForm()"
                />
                <!-- <q-btn
                  v-if="$q.platform.is.ios"
                  to="/home/shake-and-win-ios"
                  type="submit"
                  label="Submit"
                  color="primary"
                  class="full-width"
                  push
                  :disable="!formData.cartonInput"
                  @click="submitForm()"
                />
                <q-btn
                  v-if="$q.platform.is.android"
                  to="/home/shake-and-win-android"
                  type="submit"
                  label="Submit"
                  color="primary"
                  class="full-width"
                  push
                  :disable="!formData.cartonInput"
                  @click="submitForm()"
                /> -->
              </div>

              <!-- <div>tries: {{ $root.numTries }}</div> -->
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",

  data() {
    return {
      formData: {
        cartonInput: "",
      },
      numTries: "",
    };
  },

  methods: {
    //CALCULATE NUMBER OF TRIES
    submitForm() {
      let numPacks = this.formData.cartonInput;
      let numTries = numPacks / 2;

      if (numTries < 1) {
        alert("please purchase at least 2 packs");
      } else if (numTries >= 1) {
        let numTriesInt = Math.floor(numTries);
        // alert("Number of Tries:" + " " + numTriesInt);

        this.$root.numTries = numTriesInt;
      }
    },
  },
});
</script>
