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
      //triesCount: 0,
      triesCount: 1,
      name: "",
      receipt: "",
      cartonInput: "",
      inventory: [
        {
          type: "Cooler Bag",
          quantity: 50,
          image: require("assets/cooler-bag.jpg"),
        },
        {
          type: "Mason Jar",
          quantity: 50,
          image: require("assets/mason-jar.jpg"),
        },
        {
          type: "Coin Pouch",
          quantity: 50,
          image: require("assets/coin-pouch.jpg"),
        },
        {
          type: "Orange Juice",
          quantity: 50,
          image: require("assets/orange-juice.jpg"),
        },
      ],
      inventoryAvaliable: [],
      prizesWon: [
        { type: "Cooler Bag", quantity: 0 },
        { type: "Mason Jar", quantity: 0 },
        { type: "Coin Pouch", quantity: 0 },
        { type: "Orange Juice", quantity: 0 },
      ],
    };
  },
});
</script>

