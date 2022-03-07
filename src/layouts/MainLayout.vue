<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          Fresh From Florida: <br />Shake & Win Test
        </q-toolbar-title>
        <q-btn
          @click="reloadPage"
          label="Reset"
          type="reset"
          color="secondary"
          class="q-ml-sm"
          value="restart"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container">
      <div class="img-top-oranges">
        <img v-bind:src="require('assets/ff-top-oranges.png')" />
      </div>
      <router-view />

      <div class="img-logo">
        <img v-bind:src="require('assets/ff-top-icon.png')" />
      </div>

      <!-- <div class="img-carton">
        <img v-bind:src="require('assets/carton-crate.png')" />
      </div> -->
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="footer">
            <div class="left-text">*Prizes available while stocks last</div>
            <div class="right-text text-secondary">Terms & Consditions</div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import Vue from "vue";

export default {
  methods: {
    reloadPage() {
      window.location.replace("/");
      // location.reload.push("/");
      // this.$forceUpdate();
    },
  },
};
</script>

<style>
.page-container {
  background-image: url("~assets/ff-background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;
}

.img-top-oranges img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

/* .img-logo {
  position: fixed;
  top: 0;
  width: 100%;
} */

.img-logo img {
  width: 80%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.img-carton {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.img-carton img {
  display: table;
  position: relative;
  margin: auto;
  width: 100%;
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

.q-card.my-card {
  background: rgba(255, 255, 255, 0.8);
}
</style>
