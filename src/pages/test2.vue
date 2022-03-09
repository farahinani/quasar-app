<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <h3>Test 2 child</h3>
          <button>send to test 3 parent</button>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test2",

  data() {
    return {
      image: "prizes",
    };
  },
});
</script>
