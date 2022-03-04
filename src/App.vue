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
      //triesCount: 0,
      triesCount: 0,
    };
  },
});
</script>
