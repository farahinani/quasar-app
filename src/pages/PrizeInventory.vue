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
              label="checkInventory"
              color="secondary"
              class="full-width"
              @click="checkInventory()"
            /><br /><br />
            <q-btn
              type="submit"
              fullwidth
              label="select Prize Random"
              color="secondary"
              class="full-width"
              @click="selectPrizeRandom()"
            /><br /><br />
            <q-btn
              type="submit"
              fullwidth
              label="Parse Data"
              color="secondary"
              class="full-width"
              @click="parseData()"
            />

            {{ info }}
          </div>

          <br />

          <ul>
            <li v-for="prize in prizesWon" :key="prize.type">
              {{ prize.type }}
            </li>
          </ul>

          image:

          <div id="res"></div>

          <button @click="myFunction()">click</button>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

import { defineComponent } from "vue";
export default defineComponent({
  name: "PrizeInventory",
  data() {
    return {
      obj: null,
      info: null,
      inventory: [
        {
          type: "Cooler Bag",
          quantity: 50,
          image: require("../assets/cooler-bag.jpg"),
        },
        {
          type: "Mason Jar",
          quantity: 50,
          image: require("../assets/mason-jar.jpg"),
        },
        {
          type: "Coin Pouch",
          quantity: 50,
          image: require("../assets/coin-pouch.jpg"),
        },
        {
          type: "Orange Juice",
          quantity: 50,
          image: require("../assets/orange-juice.jpg"),
        },
      ],
      inventoryAvaliable: [],
      prizesWon: [
        { type: "Cooler Bag" },
        { type: "Mason Jar" },
        { type: "Coin Pouch" },
        { type: "Orange Juice" },
      ],
    };
  },

  mounted() {
    axios
      .get("https://swapi.lightningpress.studio/login.php")
      .then((response) => (this.info = response));
  },

  created() {
    // console.log(this.invetory[0])
  },

  methods: {
    checkInventory() {
      this.inventoryAvaliable = [];

      for (let i = 0; i < this.inventory.length; i++) {
        let a = this.inventory[i];
        console.log(a);
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

      if (itemType == "Cooler Bag") {
        this.inventory[item].quantity--;
        this.prizesWon[0].quantity++;
      } else if (itemType == "Mason Jar") {
        this.inventory[item].quantity--;
        this.prizesWon[1].quantity++;
      } else if (itemType == "Coin Pouch") {
        this.inventory[item].quantity--;
        this.prizesWon[2].quantity++;
      } else if (itemType == "Orange Juice") {
        this.inventory[item].quantity--;
        this.prizesWon[3].quantity++;
      } else {
        return;
      }
    },
    parseData() {
      let a = this.info.data;
      this.obj = a;
    },
  },
});
</script>


