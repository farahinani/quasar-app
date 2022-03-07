<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-h5 text-center text-bold text-primary">
              YOU HAVE WON
            </div>
            <br />
            <div class="circle-prizes">
              <span class="prizes"></span>
              <span class="prizes"></span>
              <span class="prizes"></span>
              <!-- <q-icon name="print" color="teal" size="6em" />
              <q-icon name="today" class="text-orange" size="6em" />
              <q-icon name="style" size="6em" /> -->
            </div>
          </div>
          <div>
            <p class="text-h6 text-center text-primary text-weight-regular">
              Please complete the form <br />below to redeem the prizes
            </p>
          </div>
          <br />
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div>
              <span class="text-weight-bold text-primary text-subtitle1"
                >Name</span
              >
              <q-input
                outlined
                v-model="this.$root.name"
                label="Name"
                :rules="[
                  (val) => (val && val.length > 0) || 'Enter receipt No.',
                ]"
              />
            </div>
            <div>
              <span class="text-weight-bold text-primary text-subtitle1">
                Receipt No.
              </span>
              <q-input
                outlined
                v-model="this.$root.receipt"
                label="Receipt No."
                :rules="[
                  (val) => (val && val.length > 0) || 'Enter receipt No.',
                ]"
              />
              <p class="text-left text-primary">
                if you are unsure of how to find this please approach our
                promoter
              </p>
            </div>
            <br />

            <div class="button-submit">
              <q-btn
                to="/home/shake-and-win/prizes/collect-prizes"
                class="full-width text-h5 text-weight-bold"
                label="Submit"
                type="submit"
                color="secondary"
              />
            </div>
            <br />
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
  name: "PagePrizes",

  data() {
    return {
      // name: ref(""),
      // receipt: ref(""),
    };
  },
});
</script>

<style>
.circle-prizes {
  text-align: center;
}
.prizes {
  background: white;
  border: 5px solid #fa911e;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: inline-block;
  margin: 3px;
}
</style>
