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
      <div class="img-logo">
        <img v-bind:src="require('assets/ff-top-icon.png')" />
      </div>
      <div class="img-carton">
        <img v-bind:src="require('assets/carton-crate.png')" />
      </div>

      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="footer">
            <div class="left-text">
              *Prizes available only while stocks last
            </div>
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

      window.removeEventListener("shake", () => {}, false);
      myShakeEvent.stop();
    },
  },
};
</script>

<style>
</style>
