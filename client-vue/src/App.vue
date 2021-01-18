<template>
  <v-app>
    <TheHeading />
    <v-main>
      <v-container>
        <SpareMovementForm />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TheHeading from './components/TheHeading';
import SpareMovementForm from './components/SpareMovementForm';

export default {
  name: 'App',

  components: {
    TheHeading,
    SpareMovementForm
  }
};
</script>
