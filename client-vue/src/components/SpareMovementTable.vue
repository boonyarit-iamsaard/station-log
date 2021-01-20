<template>
  <v-col cols="12" xl="10" class="mx-auto">
    <v-data-table :headers="headers" :items="getAllSpares">
      <template v-slot:item.issued="{ item }">
        <v-icon color="secondary" v-if="item.issued === false"
          >mdi-alert-circle</v-icon
        >
        <v-icon color="primary" v-if="item.issued === true"
          >mdi-check-circle</v-icon
        >
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon @click="formData(item)">mdi-pencil</v-icon>
      </template>
      <template v-slot:item.type="{ item }">
        <!-- {{ item.type.substr(0, 1) }} -->
        <v-icon>
          {{ itemTypeIcon(item.type) }}
        </v-icon>
      </template>
      <template v-slot:item.grn="{ item }">
        {{ item.grn.substr(3) }}
      </template>
    </v-data-table>
    <SpareMovementForm
      @close="onCloseDialog"
      @onAirlineChange="onAirlineChangeHandler(formDataItem, formData)"
      :button="'Update'"
      :dialog="dialog"
      :spareMovementData="formDataItem"
    />
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex';
import SpareMovementForm from './SpareMovementForm.vue';

export default {
  name: 'SpareMovementTable',

  components: { SpareMovementForm },

  data() {
    return {
      dialog: false,
      formDataItem: {},
      headers: [
        { text: 'Issued', value: 'issued', align: 'left' },
        { text: 'Edit', value: 'action', align: 'left' },
        { text: 'Date', value: 'date', align: 'left' },
        { text: 'Airline', value: 'airline', align: 'left' },
        { text: 'Flt No.', value: 'fltno', align: 'left' },
        { text: 'Reg.', value: 'acreg', align: 'left' },
        { text: 'P/N', value: 'part', align: 'left' },
        { text: 'Desc.', value: 'desc', align: 'left' },
        { text: 'Type', value: 'type', align: 'left' },
        { text: 'S/N', value: 'serial', align: 'left' },
        { text: 'GRN', value: 'grn', align: 'left' },
        { text: 'Store', value: 'store', align: 'left' }
        // { text: 'Used By', value: 'usedBy', align: 'left' },
        // { text: 'Issued By', value: 'issuedBy', align: 'left' }
      ]
    };
  },

  methods: {
    onCloseDialog(status) {
      this.dialog = status;
    },

    onResetFormHandler(formData) {
      this.formDataItem = formData;
    },

    onAirlineChangeHandler(formData) {
      this.formDataItem = { ...this.formDataItem, tail: formData };
    },

    formData(item) {
      this.dialog = true;
      this.formDataItem = Object.assign({}, item);
    },

    itemTypeIcon(item) {
      let icon;
      switch (item) {
        case 'Consumable':
          icon = 'mdi-alpha-c-circle';
          break;
        case 'Return':
          icon = 'mdi-alpha-r-circle';
          break;
        case 'Fluid':
          icon = 'mdi-alpha-f-circle';
          break;
      }
      return icon;
    }
  },

  computed: {
    ...mapGetters(['getAllSpares'])
  }
};
</script>

<style lang="scss" scoped>
// ::v-deep table {
//   table-layout: fixed;
// }

// ::v-deep thead {
//   vertical-align: top !important;
// }

::v-deep th > span {
  display: block !important;
  // padding-top: 1rem !important;
}
</style>
