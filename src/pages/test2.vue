<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin bg-transparent">
      <q-card-section>
        <div class="text-center">
          <div class="flex flex-center" style="height: 450px">
            <!-- <transition
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
                  <div v-if="show" class="inner"></div>
               
                </transition>
              </div>
            </transition> -->
          </div>
        </div>

        <div class="q-py-lg q-px-md"></div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "test2",

  data() {
    return {
      props: {
        msg: String,
      },
    };
  },
});
</script>
