<template>
  <v-col sm="10" md="8" class="mx-auto">
    <v-card>
      <v-card-title primary-title class="justify-center">
        Spare Movement Form
      </v-card-title>
      <v-form>
        <v-container>
          <SharedFlightDetailsForm />
        </v-container>
      </v-form>
    </v-card>
  </v-col>
</template>

<script>
import SharedFlightDetailsForm from './SharedFlightDetailsForm';

export default {
  name: 'SpareMovmentForm',
  components: {
    SharedFlightDetailsForm
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
