<template>
  <q-page>
    <div class="q-py-lg q-px-md">
      <q-input
        bottom-slots
        v-model.number="model"
        type="number"
        placeholder="Insert cartons purchased"
        style="max-width: 100%"
      >
        <template v-slot:after>
          <q-btn no-caps push color="primary" label="Submit" />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
