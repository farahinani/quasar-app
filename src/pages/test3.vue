<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <h3>Test 3 parent</h3>
          from test2:
          <test2 :username="user.username" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import test2 from "./test2.vue";

export default defineComponent({
  name: "test3",

  data() {
    return {
      user: {
        username: "matt",
      },
    };
  },

  components: {
    test2,
  },
});
</script>
