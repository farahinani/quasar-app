<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-h6 text-center text-primary text-weight-regular">
              Please approach our <br />promoter and
              <span class="text-weight-bold"
                >show them this page and your receipt
              </span>
              to collect your prizes*
            </div>
            <br />
            <div class="circle-prizes">
              <span class="prizes"></span>
              <span class="prizes"></span>
              <span class="prizes"></span>
            </div>
            <!-- <q-icon name="print" color="teal" size="6em" />
            <q-icon name="today" class="text-orange" size="6em" />
            <q-icon name="style" size="6em" /> -->
          </div>

          <div class="text-body1 text-primary">Entry: 1</div>
          <hr />
          <div class="text-body1 text-primary">Cartons Purchased: 6</div>
          <hr />
          <div class="text-body1 text-primary">Name: {{ this.$root.name }}</div>
          <hr />
          <div class="text-body1 text-primary">
            Receipt: {{ this.$root.receipt }}
          </div>
          <br />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "PageCollectPrizes",
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