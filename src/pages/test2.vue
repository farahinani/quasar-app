<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test 2 page</div>
          <q-btn
            type="submit"
            label="SHAKE BUTTON"
            color="primary"
            class="full-width"
            @click="forAndroid()"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { event } from "quasar";
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "test2",

  setup() {
    const $q = useQuasar();

    $q.platform.is.desktop;
    $q.platform.is.android;
    $q.platform.is.ios;

    // if ($q.platform.is.ios) {
    //   // alert("ios");
    //   forIos();
    // } else if ($q.platform.is.android) {
    //   // alert("android");
    //   forAndroid();
    // } else {
    //   // alert("desktop");
    //   forDesktop();
    // }

    // function forIos() {}

    // function forAndroid() {
    //   if (this.$root.triesCount < this.$root.numTries) {
    //     this.$root.triesCount++;
    //     if (this.$root.triesCount < this.$root.numTries) {
    //       alert("shaken !! : try " + this.$root.triesCount);
    //     } else {
    //       alert("Last Shake");
    //     }
    //   }
    // }

    // function forDesktop() {
    //   alert("desktop");
    // }

    // return {
    //   forDesktop,
    // };
  },

  methods: {
    forAndroid() {
      if (this.$root.triesCount < this.$root.numTries) {
        this.$root.triesCount++;
        if (this.$root.triesCount < this.$root.numTries) {
          console.log("shaken !! : try " + this.$root.triesCount);
        } else {
          console.log("Last Shake");
        }
      }
    },
  },
});
</script>
