<template>
  <v-app>
    <TheAppBar @drawerToggle="drawerToggle" />
    <TheAppDrawer :drawer="drawer" />
    <v-main></v-main>
  </v-app>
</template>

<script>
import TheAppBar from './components/TheAppBar';
import TheAppDrawer from './components/TheAppDrawer';

export default {
  name: 'App',

  components: {
    TheAppBar,
    TheAppDrawer
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    drawerToggle() {
      this.drawer = !this.drawer;
      console.log(this.drawer);
    }
  }
};
</script>
