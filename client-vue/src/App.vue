<template>
  <v-app>
    <AppNavigation />
    <v-main class="grey lighten-3">
      <v-container>
        <v-btn color="primary" dark fab small @click.prevent="dialog = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <SpareMovementForm
          @close="onCloseDialog"
          @onResetForm="onResetFormHandler"
          @onAirlineChange="onAirlineChangeHandler"
          :dialog="dialog"
          :spareMovementData="spareMovementData"
        />
        <SpareMovementTable />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation';
import SpareMovementForm from './components/SpareMovementForm';
import SpareMovementTable from './components/SpareMovementTable';

export default {
  name: 'App',

  components: {
    AppNavigation,
    SpareMovementForm,
    SpareMovementTable
  },

  data() {
    return {
      dialog: false,
      spareMovementData: {
        date: new Date().toISOString().substr(0, 10),
        airline: 'CX',
        tail: '',
        fltno: '',
        part: '',
        desc: '',
        type: 'Consumable',
        serial: 'NIL',
        grn: '',
        qty: 0,
        store: 'BKK',
        usedBy: '',
        issued: false,
        issuedNo: '',
        issuedBy: ''
      }
    };
  },

  methods: {
    onCloseDialog(status) {
      this.dialog = status;
    },

    onResetFormHandler(formData) {
      this.spareMovementData = formData;
    },

    onAirlineChangeHandler(formData) {
      this.spareMovementData = { ...this.spareMovementData, tail: formData };
    }
  }
};
</script>
