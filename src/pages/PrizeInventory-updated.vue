<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-center">
            <br />

            <q-btn
              type="submit"
              fullwidth
              label="select Prize Random"
              color="secondary"
              class="full-width"
              @click="selectPrizeRandom()"
            /><br /><br />

            {{ info }}

            <br /><br />

            Inventroy: {{ inventory }}

            <br /><br />

            Inventory Avaliable: {{ inventoryAvaliable }}
          </div>

          <br />
          <hr />
          <br />
          <q-btn
            type="submit"
            fullwidth
            label="Post Inventory"
            color="secondary"
            class="full-width"
            @click="postInventory()"
          /><br /><br />

          <!-- <q-btn
            type="submit"
            fullwidth
            label="Get Entries"
            color="secondary"
            class="full-width"
            @click="getEntries()"
          /><br><br>
 -->

          {{ articleId }}
          <!-- MODAL POPUP -->

          <!-- BACK BUTTON -->
          <!-- router.go(n) where n can be + or -   -->
          <!-- <q-btn
            to="/home/shake-and-win"
            type="submit"
            fullwidth
            label="back"
            color="primary"
            class="full-width"
          /> -->
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { date } from "quasar";

import { defineComponent } from "vue";
export default defineComponent({
  name: "Inventory",

  data() {
    return {
      info: null,
      inventory: [],
      inventoryAvaliable: [],
      receipt: "receipt test 314234234",
      name: "Joanne Test",
      prizesWon: [
        { type: "Cooler Bag", quantity: 0 },
        { type: "Mason Jar", quantity: 0 },
        { type: "Coin Pouch", quantity: 0 },
        { type: "Orange Juice", quantity: 0 },
      ],
      articleId: null,
    };
  },

  mounted() {
    this.getData();
  },

  created() {},

  methods: {
    checkInventory() {
      this.inventoryAvaliable = [];

      for (let i = 0; i < this.inventory.length; i++) {
        let a = this.inventory[i];
        // console.log(a);
        if (a.quantity > 0) {
          this.inventoryAvaliable.push(a);
        }
      }
    },
    selectPrizeRandom() {
      this.checkInventory();

      let itemsAvaliable = this.inventoryAvaliable.length;
      let item = Math.floor(Math.random() * itemsAvaliable); //random calculation
      let itemType = this.inventoryAvaliable[item].type;

      console.log(item, itemType);

      //reduce inventory

      if (itemType == "coolerBag") {
        this.inventory[item].quantity--;
        this.prizesWon[0].quantity++;
      } else if (itemType == "masonJar") {
        this.inventory[item].quantity--;
        this.prizesWon[1].quantity++;
      } else if (itemType == "coinPouch") {
        this.inventory[item].quantity--;
        this.prizesWon[2].quantity++;
      } else if (itemType == "orangeJuice") {
        this.inventory[item].quantity--;
        this.prizesWon[3].quantity++;
      } else {
        return;
      }
    },
    getData() {
      axios
        .get("https://swapi.lightningpress.studio/getinventory.php")
        .then((response) => {
          this.info = response;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
          this.parseData();
        });
    },
    parseData() {
      let str = this.info.data;
      let rawData = str.split(" ", 4);

      let inventoryData = [];

      for (let i = 0; i < rawData.length; i++) {
        let text = rawData[i];
        let result = text.replace(/'/g, '"');
        let a = JSON.parse(result);

        inventoryData.push(a);

        inventoryData[i].quantity = parseInt(inventoryData[i].quantity);
      }

      this.inventory = inventoryData;
    },
    postInventory() {
      const timeStamp = Date.now();
      const formattedTime = date.formatDate(
        timeStamp,
        "YYYY-MM-DDTHH:mm:ss.SSSZ"
      );

      let params = new URLSearchParams();

      for (let i = 0; i < this.inventory.length; i++) {
        let item = this.inventory[i].type;
        let itemNew = item.concat("Num");
        let quantity = this.inventory[i].quantity;

        params.append(itemNew, quantity);
      }

      params.append("timestamp", formattedTime);
      params.append("name", this.name);
      params.append("receipt", this.receipt);
      params.append("prizes", JSON.stringify(this.prizesWon));

      axios
        .post("https://swapi.lightningpress.studio/postinventory.php", params)
        .then((response) => (this.articleId = response))
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    getEntries() {
      axios
        .get("https://swapi.lightningpress.studio/getEntries.php")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
          // this.parseData();
        });
    },
  },
});
</script>


