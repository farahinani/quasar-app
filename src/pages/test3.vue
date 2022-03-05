<template>
  <!-- <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog> -->
  <!-- NEXT BUTTON -->
  <!-- 
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-btn
    @click="alert = true"
    type="submit"
    fullwidth
    label="Alert"
    color="primary"
    class="full-width"
  /> -->
  <q-btn label="Auto Closing" color="primary" @click="autoClose" />

  <!-- <q-btn
    @click="alert = true"
    type="submit"
    fullwidth
    label="Alert"
    color="primary"
    class="full-width"
  /> -->
</template>

<script>
import { useQuasar } from "quasar";
import test2 from "src/pages/test2.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "test3",

  data() {
    return {
      //alert: false,
      alert: false,
    };
  },

  setup() {
    const $q = useQuasar();

    function autoClose() {
      let seconds = 3;

      const dialog = $q

        .dialog({
          component: test2,
          // title: "Alert",
          // message: `Autoclosing in ${seconds} seconds.`,

          componentProps: {
            //text: "something",
            // ...more..props...
          },
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          clearTimeout(timer);
          // console.log('I am triggered on both OK and Cancel')
        });

      const timer = setInterval(() => {
        seconds--;

        if (seconds > 0) {
          dialog.update({
            message: `Autoclosing in ${seconds} second${
              seconds > 1 ? "s" : ""
            }.`,
          });
        } else {
          clearInterval(timer);
          dialog.hide();
        }
      }, 1000);
    }

    return {
      autoClose,
    };
  },

  methods: {},
});
</script>
