<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-h5 text-center">
              Please enter how many <br />cartons you have purchased <br />in
              your receipt*.
            </div>

            <div class="text-subtitle1 text-center">
              *Redemption is determined by purchases <br />
              within a single receipt
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
                  type="submit"
                  label="Submit"
                  color="primary"
                  class="full-width"
                  push
                  :disable="!formData.cartonInput"
                  @click="submitForm()"
                />
              </div>

              <br />
              <div>
                <q-btn
                  to="/home/shake-and-win"
                  color="primary"
                  label="Next"
                  class="full-width"
                />
              </div>

              <div>tries: {{ formData.numTriesInt }}</div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "PageHome",

  data() {
    return {
      formData: {
        cartonInput: "",
      },

      // submitForm() {
      //   let numPacks = this.formData.cartonInput;

      //   let numTries = numPacks / 2;

      //   if (numTries < 1) {
      //     alert("please purchase at least 2 packs");
      //   } else if (numTries >= 1) {
      //     let numTriesInt = Math.floor(numTries);

      //     alert("Number of Tries:" + " " + numTriesInt);
      //     console.log(numTriesInt);
      //   }
      // },
    };
  },

  // setup() {
  //   function submitForm() {
  //     let numPacks = this.formData.cartonInput;

  //     let numTries = numPacks / 2;

  //     if (numTries < 1) {
  //       alert("please purchase at least 2 packs");
  //     } else if (numTries >= 1) {
  //       let numTriesInt = Math.floor(numTries);

  //       alert("Number of Tries:" + " " + numTriesInt);
  //       console.log(numTriesInt);
  //     }
  //   }

  //   return {
  //     submitForm,
  //   };
  // },

  methods: {
    //CALCULATE NUMBER OF TRIES
    submitForm() {
      // console.log("submit success");

      let numPacks = this.formData.cartonInput;
      let numTries = numPacks / 2;

      if (numTries < 1) {
        alert("please purchase at least 2 packs");
      } else if (numTries >= 1) {
        let numTriesInt = Math.floor(numTries);
        alert("Number of Tries:" + " " + numTriesInt);
      }

      return {
        numTriesInt,
      };
    },
  },
});
</script>
