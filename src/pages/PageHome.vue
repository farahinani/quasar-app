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

            <q-form @submit="onSubmit">
              <q-input
                min="0"
                name="number"
                type="number"
                outlined
                bottom-slots
                v-model="newAddCartons"
                placeholder="Enter cartons purchased"
                clearable
              >
              </q-input>

              <div>
                <q-btn
                  @click="addNewCarton"
                  :disable="!newAddCartons"
                  push
                  color="primary"
                  label="Submit"
                  class="full-width"
                  type="submit"
                />
              </div>
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
      newAddCartons: "",
    };
  },

  methods: {
    addNewCarton() {
      console.log("addNewCarton");
    },
  },
});
</script>
