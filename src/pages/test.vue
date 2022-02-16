<template>
  <div class="q-pa-md">
    <div v-if="$q.platform.is.desktop">I'm only rendered on Desktop!</div>
    <div v-if="$q.platform.is.android">I'm only rendered on mobile!</div>
    <div v-if="$q.platform.is.ios">I'm only rendered on mobile!</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

export default defineComponent({
  name: "test",

  setup() {
    const $q = useQuasar();

    $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;
  },
});
</script>


