<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-h6 text-center text-primary text-weight-regular">
              Please show this page with your receipt to our staff to collect
              your prizes*
            </div>
            <br />
            <div class="circle-prizes">
              <div
                v-for="prize in prizesArray"
                :key="prize.prizesArray"
                class="prizes"
              >
                <img :src="prize" />
              </div>
            </div>

            <div class="text-body1 text-primary">Entry number: 1</div>
            <hr />
            <div class="text-body1 text-primary">
              Cartons purchased:
              {{ this.$root.cartonInput }}
            </div>
            <hr />
            <div class="text-body1 text-primary">
              Name: {{ this.$root.name }}
            </div>
            <hr />
            <div class="text-body1 text-primary">
              Receipt no.: {{ this.$root.receipt }}
            </div>
            <br />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageCollectPrizes",
  computed: {
    // a computed getter
    prizesArray() {
      // `this` points to the component instance
      let prizes = this.$root.prizesWon;
      let prizeArray = [];

      for (let i = 0; i < prizes.length; i++) {
        if (prizes[i].quantity > 0) {
          for (let e = 0; e < prizes[i].quantity; e++) {
            prizeArray.push(prizes[i].image);
          }
        }
      }

      return prizeArray;
    },
  },
});
</script>

<style>
.circle-prizes {
  text-align: center;
}
.prizes {
  background: white;
  border: 5px solid #fa911e;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: inline-block;
  margin: 3px;
}

.q-py-lg.q-px-md {
  max-height: 70vh;
  overflow: auto;
}
</style>
