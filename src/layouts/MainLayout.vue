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
      <div class="img-container">
        <img id="ff-icon-top" v-bind:src="require('assets/ff-top-icon.png')" />
      </div>
      <router-view />
    </q-page-container>

    <div class="img-carton">
      <img
        id="ff-carton-bottom"
        v-bind:src="require('assets/carton-crate.png')"
      />
    </div>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title class="text-body2"
          >*Prizes available while stocks last</q-toolbar-title
        >
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
}

.img-container {
  position: fixed;
  /* top: 0; */
  width: 100%;
}

#ff-icon-top {
  width: 75%;
  display: table;
  position: relative;
  margin: auto;
}

.img-carton {
  position: fixed;
  bottom: 0;
  width: 100%;
}

#ff-carton-bottom {
  display: table;
  position: relative;
  margin: auto;
  width: 100%;
}

.footer.q-footer.q-layout__section--marginal.fixed-bottom {
  background: #1a6305;
}

.q-card.my-card {
  background: rgba(255, 255, 255, 0.8);
}
</style>