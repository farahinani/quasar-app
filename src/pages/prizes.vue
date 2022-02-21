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
            <div class="text-h5 text-center">YOU HAVE WON :</div>
            <br />
            <q-icon name="print" color="teal" size="6em" />
            <q-icon name="today" class="text-orange" size="6em" />
            <q-icon name="style" size="6em" />
          </div>
          <div>
            <p class="text-h5 text-center">
              Please complete the form <br />below to redeem the prizes
            </p>
          </div>
          <br />
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              outlined
              v-model="name"
              label="Name"
              :rules="[(val) => (val && val.length > 0) || 'Enter receipt No.']"
            />

            <div>
              <q-input
                outlined
                v-model="receipt"
                label="Receipt No."
                :rules="[
                  (val) => (val && val.length > 0) || 'Enter receipt No.',
                ]"
              />
              <p class="text-center">
                if you are unsure of how to find this <br />please approach our
                promoter
              </p>
            </div>
            <div>
              <q-btn
                to="/home/shake-and-win/prizes/collect-prizes"
                class="full-width"
                label="Submit"
                type="submit"
                color="primary"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default defineComponent({
  name: "test2",

  data() {
    return {
      name: ref(""),
      receipt: ref(""),
    };
  },
});
</script>
