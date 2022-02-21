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
            <div class="text-h6 text-center">
              Please approach our <br />promoter and
              <b
                >show them<br />
                this page and your receipt </b
              ><br />
              collect your prizes*
            </div>
            <br />
            <q-icon name="print" color="teal" size="6em" />
            <q-icon name="today" class="text-orange" size="6em" />
            <q-icon name="style" size="6em" />
          </div>

          <br />
          <div class="text-body1">Entry: 1</div>
          <hr />
          <div class="text-body1">Cartons Purchased: 4</div>
          <hr />
          <div class="text-body1">Receipt: 154654654654654</div>
          <hr />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "collect-prizes",
});
</script>
