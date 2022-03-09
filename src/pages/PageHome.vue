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
                  to="/home/shake-and-win"
                  type="submit"
                  label="Submit"
                  color="secondary"
                  class="full-width text-h5 text-weight-bold"
                  push
                  :disable="!this.$root.cartonInput"
                  @click="submitForm()"
                /><br /><br />
                <!-- <q-btn
                  type="submit"
                  fullwidth
                  label="checkInventory"
                  color="info"
                  class="full-width"
                  @click="checkInventory()"
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
      // formData: {
      //   cartonInput: "",
      // },
      cartonInput: "",
      numTries: "",
    };
  },

  methods: {
    //CALCULATE NUMBER OF TRIES
    submitForm() {
      let numPacks = this.$root.cartonInput;
      let numTries = numPacks / 2;

      if (numTries < 1) {
        alert("please purchase at least 2 packs");
      } else if (numTries >= 1) {
        let numTriesInt = Math.floor(numTries);
        // alert("Number of Tries:" + " " + numTriesInt);

        this.$root.numTries = numTriesInt;
      }

      //this.checkInventory();
    },

    // checkInventory() {
    //   this.$root.inventoryAvaliable = [];

    //   for (let i = 0; i < this.$root.inventory.length; i++) {
    //     let a = this.$root.inventory[i];
    //     console.log(a);
    //     if (a.quantity > 0) {
    //       this.$root.inventoryAvaliable.push(a);
    //     }
    //   }
    // },
  },
});
</script>

