<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test 2 page</div>
          <!-- <q-btn
            type="submit"
            label="SHAKE BUTTON"
            color="primary"
            class="full-width"
            @click="forAndroid()"
          /> -->
          <!-- <p>Enter number of cartons</p>

          <form>
            Number of Cartons:
            <input type="text" name="fname" id="packCount" /><br />
            <input type="button" @click="shakeSuccess()" value="Submit" />
          </form> -->
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test2",

  methods: {
    // shakeSuccess() {
    //   if (this.$root.triesCount < this.$root.numTries) {
    //     this.$root.triesCount++;
    //     if (this.$root.triesCount < this.$root.numTries) {
    //       alert("shaken !! : try " + this.$root.triesCount);
    //     } else {
    //       alert("Last Shake");
    //     }
    //   }
    // },
  },
});
</script>
