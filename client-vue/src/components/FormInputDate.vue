<template>
  <v-col cols="12">
    <v-menu
      v-model="datePickerMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Date"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        @input="datePickerMenu = false"
      ></v-date-picker>
    </v-menu>
  </v-col>
</template>

<script>
export default {
  name: 'FormInputDate',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      datePickerMenu: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
