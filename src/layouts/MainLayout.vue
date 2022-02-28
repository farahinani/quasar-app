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
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    reloadPage() {
      //window.location.replace("/");
      this.$router.reload();
    },
  },
};
</script>