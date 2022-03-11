<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      numTries: 0, // customer's strial
      triesCount: 1,
      name: "",
      receipt: "",
      cartonInput: "",
      inventory: [],
      inventoryAvaliable: [],
      prizesWon: [
        {
          type: "Cooler Bag",
          quantity: 0,
          image: require("assets/cooler-bag.jpg"),
        },
        {
          type: "Mason Jar",
          quantity: 0,
          image: require("assets/mason-jar.jpg"),
        },
        {
          type: "Coin Pouch",
          quantity: 0,
          image: require("assets/coin-pouch.jpg"),
        },
        {
          type: "Orange Juice",
          quantity: 0,
          image: require("assets/orange-juice.jpg"),
        },
      ],
      newPrizes: "",
      prizesList: [],
      dialogOpen: false
    };
  },
});
</script>

<style>


</style>
