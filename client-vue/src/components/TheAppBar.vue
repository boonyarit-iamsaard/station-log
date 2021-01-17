<template>
  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="$emit('drawerToggle')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheAppBar',
  props: ['drawerToggle'],
  data() {
    return {};
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
