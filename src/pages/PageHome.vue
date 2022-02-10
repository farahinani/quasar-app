<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" style="width: 30em">
      <q-card-section>
        <div class="q-py-lg q-px-md">
          <div class="text-h5 text-center">
            Please enter how many <br />cartons you have purchased <br />in your
            receipt*.
          </div>
          <div class="text-subtitle1 text-center">
            *Redemption is determined by purchases <br />
            within a single receipt
          </div>
          <br />
          <q-input
            min="0"
            type="number"
            outlined
            bottom-slots
            v-model="newAddCartons"
            placeholder="Enter cartons purchased"
          >
            <template v-slot:after>
              <q-btn
                :disable="!newAddCartons"
                push
                color="primary"
                label="Submit"
              />
            </template>
          </q-input>
        </div>
      </q-card-section>
    </q-card>
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
});
</script>
