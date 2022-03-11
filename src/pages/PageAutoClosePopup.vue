<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin bg-transparent">
      <q-card-section>
        <div class="text-center">
          <div class="flex flex-center" style="height: 80vh">
            <transition
              appear
              name="nested"
              enter-active-class="animate__animated animate__bounceInDown"
              leave-active-class="animate__animated animate__bounceOutDown"
            >
              <div v-if="show">
                <img
                  style="width: 60%"
                  v-bind:src="require('assets/ff-orange.png')"
                />

                <transition
                  name="nested"
                  enter-active-class="animate__animated animate__bounce"
                  leave-active-class="animate__animated animate__bounceOutDown"
                >
                  <div v-if="$attrs.text" class="inner">
                    <img :src="$attrs.text" />
                  </div>
                </transition>
              </div>
            </transition>
          </div>
        </div>

        <div class="q-py-lg q-px-md">
          <q-btn
            class="full-width"
            color="primary"
            label="Cancel"
            @click="onCancelClick"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { useDialogPluginComponent } from "quasar";
import "animate.css";

export default defineComponent({
  name: "PageAutoClosePopup",

  props: {
    // ...your custom props
    // text: "something",
  },

  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],

  setup() {},

  data() {
    return { showContent: false, showModal: false };
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

<style>
.inner {
  background: white;
  width: 200px;
  height: 200px;
  border: 10px solid orange;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition-delay: 1.5s;
  overflow: hidden;
}

.inner img {
  width: 100%;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
