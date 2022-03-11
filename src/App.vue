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
      dialogOpen: false,
    };
  },
});
</script>

<style>
.q-page-container.page-container {
  background-image: url("~assets/ff-background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;
}

header.q-header {
  opacity: 0.5;
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer.q-footer.q-layout__section--marginal.fixed-bottom {
  background: #1a6305;
}
.left-text {
  float: left;
  font-size: 0.6em;
}
.right-text {
  float: right;
  font-size: 0.6em;
}

.img-top-oranges img {
  width: 100vw;
  position: absolute;
}

.img-logo img {
  width: 75vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.img-carton {
  position: relative;
  bottom: 0;
  width: 100vw;
}

.img-carton img {
  position: relative;
  margin: auto;
  width: 100vw;
}

.q-card.my-card {
  background: rgba(255, 255, 255, 0.8);
}

/**-------------- MEDIA QUERY LANDSCAPE --------------*/
@media only screen and (orientation: landscape) {
  #q-app {
    min-height: 100vh;
  }

  body {
    background: #1a6305;
  }

  .img-top-oranges {
    position: relative;
    width: 30vw;
  }
  .img-top-oranges img {
    width: 30vw;
    position: absolute;
    top: 0%;
  }

  .page-container {
    width: 30vw;
    height: 100vh;
    margin: auto;
  }

  .img-carton {
    /* width: 30vw;
    margin: auto; */
    position: absolute;
  }
  .img-carton img {
    position: relative;
    margin: auto;
    width: 30vw;
  }

  .img-logo {
    width: 30vw;
    margin: auto;
  }
  .img-logo img {
    width: 20vw;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
/**-------------- END MEDIA QUERY LANDSCAPE -----------*/

/**-------------- MEDIA QUERY  -----------*/
@media only screen and (max-width: 600px) {
  body {
    background: #1a6305;
  }
  #q-app {
    min-height: 100vh;
  }
  .page-container {
    width: 60vw;
    height: 100vh;
    margin: auto;
  }

  .img-top-oranges {
    position: relative;
    width: 60vw;
  }

  .img-top-oranges img {
    width: 60vw;
    position: absolute;
    top: 0%;
  }

  .img-logo img {
    width: 60%;
  }

  .img-carton {
    width: 60vw;
    position: absolute;
  }

  .img-carton img {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  body {
    background: #1a6305;
  }
  #q-app {
    min-height: 100vh;
  }
  .page-container {
    width: 60vw;
    height: 100vh;
    margin: auto;
  }

  .img-top-oranges {
    position: relative;
    width: 60vw;
  }

  .img-top-oranges img {
    width: 60vw;
    position: absolute;
    top: 0%;
  }

  .img-logo img {
    width: 60%;
  }

  .img-carton {
    width: 60vw;
    position: absolute;
  }

  .img-carton img {
    width: 100%;
  }
}

@media only screen and (min-width: 900px) {
  body {
    background: #1a6305;
  }
  #q-app {
    min-height: 100vh;
  }
  .page-container {
    width: 30vw;
    height: 100vh;
    margin: auto;
  }

  .img-top-oranges {
    position: relative;
    width: 30vw;
  }

  .img-top-oranges img {
    width: 30vw;
    position: absolute;
    top: 0%;
  }

  .img-logo img {
    width: 25vw;
  }

  .img-carton {
    width: 30vw;
    position: absolute;
  }

  .img-carton img {
    width: 30vw;
  }
}
</style>
