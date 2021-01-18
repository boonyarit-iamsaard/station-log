<template>
  <nav>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      app
      color="grey lighten-4"
      v-model="drawer"
      clipped-left
      :permanent="$vuetify.breakpoint.mdAndUp"
    >
      <v-toolbar color="primary"> </v-toolbar>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'TheHeading',
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    title() {
      return this.$vuetify.breakpoint.mdAndUp
        ? 'Bangkok Engineering - Station Log'
        : 'Station Log';
    }
  }
};
</script>

<style lang="scss" scoped></style>
