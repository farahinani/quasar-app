<template>
  <q-page>
    <h5>Intro page</h5>
    <div>
      <q-btn to="/home" push color="primary" label="Home" type="submit" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIntro",
});
</script>
