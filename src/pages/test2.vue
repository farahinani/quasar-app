<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <!-- <div class="text-center">
          test modal from test2
          <br />
        </div> -->

        <div class="text-center">
          <span class="text-h4">SHAKE & WIN ANIMATION </span>
          <hr />
          <div class="flex flex-center" style="height: 250px">
            <transition-group
              appear
              enter-active-class="animated bounceInDown"
              leave-active-class="animated zoomOutDown"
            >
              <q-img
                width="30%"
                key="ball-card"
                v-show="show"
                src="~assets/orange.png"
              />
            </transition-group>
          </div>
        </div>

        <br />
        <q-btn
          type="submit"
          fullwidth
          class="full-width"
          color="secondary"
          label="Show / Hide"
          v-on:click="show = !show"
        /><br /><br />

        <div class="q-py-lg q-px-md"></div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- <q-dialog v-model="alert">
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
  </q-dialog> -->
</template>

<script>
import { defineComponent } from "vue";
import { useDialogPluginComponent } from "quasar";

var Shake = require("src/pages/shake.js");

export default defineComponent({
  name: "test2",

  props: {
    // ...your custom props
    // text: "something",
  },

  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],

  setup() {
    //let seconds = 3;
    //   // REQUIRED; must be called inside of setup()
    //   const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
    //     useDialogPluginComponent();
    //   // dialogRef      - Vue ref to be applied to QDialog
    //   // onDialogHide   - Function to be used as handler for @hide on QDialog
    //   // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //   //                    example: onDialogOK() - no payload
    //   //                    example: onDialogOK({ /*.../* }) - with payload
    //   // onDialogCancel - Function to call to settle dialog with "cancel" outcome
    //   return {
    //     // This is REQUIRED;
    //     // Need to inject these (from useDialogPluginComponent() call)
    //     // into the vue scope for the vue html template
    //     dialogRef,
    //     onDialogHide,
    //     // other methods that we used in our vue html template;
    //     // these are part of our example (so not required)
    //     onOKClick() {
    //       // on OK, it is REQUIRED to
    //       // call onDialogOK (with optional payload)
    //       onDialogOK();
    //       // or with payload: onDialogOK({ ... })
    //       // ...and it will also hide the dialog automatically
    //     },
    //     // we can passthrough onDialogCancel directly
    //     onCancelClick: onDialogCancel,
    //   };
  },

  data() {
    return {
      //testDisplay: false,
      //alert: false,
      // seen: true,
      // hide: true,
    };
  },

  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide the dialog
      this.hide();
    },
  },
});
</script>
