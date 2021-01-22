<template>
  <nav>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-items class="align-center">
        <v-img src="../assets/logo-white.png"></v-img>
      </v-toolbar-items>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      app
      color="white"
      v-model="drawer"
      clipped-left
      :permanent="$vuetify.breakpoint.lgAndUp"
    >
      <v-toolbar color="primary"> </v-toolbar>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    title() {
      return this.$vuetify.breakpoint.smAndUp
        ? 'Bangkok Engineering - Station Log'
        : 'Station Log';
    }
  }
};
</script>

<style lang="scss" scoped></style>
