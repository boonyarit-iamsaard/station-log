<template>
  <v-navigation-drawer
    app
    clipped-left
    color="grey lighten-4"
    temporary
    v-model="drawer"
    :permanent="$vuetify.breakpoint.mdAndUp"
  >
    <v-toolbar color="primary"> </v-toolbar>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TheAppDrawer',
  props: ['drawer'],
  data() {
    return {
      drawerOpen: this.drawer
    };
  }
};
</script>

<style lang="scss" scoped></style>
