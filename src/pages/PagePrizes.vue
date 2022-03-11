<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="q-py-lg q-px-md">
            <div class="text-h5 text-center text-bold text-primary">
              YOU HAVE WON
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
          </div>
          <div>
            <p class="text-h6 text-center text-primary text-weight-regular">
              Please complete the form <br />below to redeem the prizes
            </p>
          </div>
          <br />
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div>
              <span class="text-weight-bold text-primary text-subtitle1"
                >Name</span
              >
              <q-input
                outlined
                v-model="this.$root.name"
                label="Name"
                :rules="[
                  (val) => (val && val.length > 0) || 'Enter receipt No.',
                ]"
              />
            </div>
            <div>
              <span class="text-weight-bold text-primary text-subtitle1">
                Receipt No.
              </span>
              <q-input
                outlined
                v-model="this.$root.receipt"
                label="Receipt No."
                :rules="[
                  (val) => (val && val.length > 0) || 'Enter receipt No.',
                ]"
              />
              <p class="text-left text-primary">
                if you are unsure of how to find this please approach our
                promoter
              </p>
            </div>
            <br />

            <div class="button-submit">
              <q-btn
                to="/collect-prizes"
                v-on:click="postInventory()"
                class="full-width text-h5 text-weight-bold"
                label="Submit"
                type="submit"
                color="secondary"
              />
            </div>
            <br />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
import { date } from "quasar";

export default defineComponent({
  name: "PagePrizes",

  data() {
    return {
      serverResponse: null,
    };
  },
  computed: {
    // a computed getter
    prizesArray() {
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

    prizesArrayNames() {
      let prizes = this.$root.prizesWon;
      let prizeArray = [];

      for (let i = 0; i < prizes.length; i++) {
        if (prizes[i].quantity > 0) {
          for (let e = 0; e < prizes[i].quantity; e++) {
            prizeArray.push(prizes[i].type);
          }
        }
      }
      return prizeArray;
    },
  },

  methods: {
    postInventory() {
      const timeStamp = Date.now();
      const formattedTime = date.formatDate(
        timeStamp,
        "YYYY-MM-DDTHH:mm:ss.SSSZ"
      );

      let params = new URLSearchParams();

      for (let i = 0; i < this.$root.inventory.length; i++) {
        let item = this.$root.inventory[i].type;
        let itemNew = item.concat("Num");
        let quantity = this.$root.inventory[i].quantity;

        params.append(itemNew, quantity);
      }

      params.append("timestamp", formattedTime);
      params.append("name", this.$root.name);
      params.append("receipt", this.$root.receipt);
      params.append("prizes", JSON.stringify(this.prizesArrayNames));
      params.append("packs", this.$root.cartonInput);

      axios
        .post("https://swapi.lightningpress.studio/postinventory.php", params)
        .then((response) => (this.serverResponse = response))
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
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
  overflow: hidden;
}

.prizes img {
  width: 100%;
}
</style>
