<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      numTries: 0, // customer's trial
      // triesCount: 1,
      triesCount: 1,
    };
  },
});
</script>
