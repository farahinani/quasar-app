<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        page test 2

        <q-card-section>
          <q-btn label="Auto Closing" color="primary" @click="autoClose" />
          <!-- <div v-if="seen" class="q-py-lg q-px-md">test 2 page</div> -->
          <!-- <q-btn label="Alert" color="primary" @click="alert = true" />

          <q-dialog v-model="alert">
            <q-card>
              <q-card-section>
                <div class="text-h6">alert</div>
              </q-card-section>

              <q-card-section>
                <div class="q-pt-none">
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="ok" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog> -->
          <test3 />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import test3 from "src/pages/test3.vue";

export default defineComponent({
  name: "test2",

  data() {
    return {
      alert: false,
      seen: true,
    };
  },

  setup() {
    const $q = useQuasar();

    $q.dialog({
      component: test3,
    })
      .onOk(() => {
        console.log("OK");
      })
      .onCancel(() => {
        console.log("Cancel");
      })
      .onDismiss(() => {
        console.log("Called on OK or Cancel");
      });
  },

  methods() {
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
