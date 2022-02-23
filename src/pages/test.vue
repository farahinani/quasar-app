<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">test page</div>
          <!-- <q-btn
            type="submit"
            label="SHAKE"
            color="primary"
            class="full-width"
            @click="shakeSuccess()"
          /> -->

          <button id="start">start</button>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { Shake } from "src/router/shake";

export default defineComponent({
  name: "test",

  setup() {
    const shake = new Shake({ threshold: 15, timeout: 1000 });
    shake.addEventListener("shake", (ev) => {
      console.log("Shake!", ev.detail.timeStamp, ev.detail.acceleration);
    });
    const button = document.getElementById("start");
    if (button) {
      button.addEventListener(
        "click",
        async () => {
          const approved = await shake.start();
          const div = document.body.appendChild(document.createElement("div"));
          div.textContent = `Approved: ${String(approved)}`;
          button.remove();
        },
        { once: true }
      );
    }
  },

  methods: {},
});
</script>


