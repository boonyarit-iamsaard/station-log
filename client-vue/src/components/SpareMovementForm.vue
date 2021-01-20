<template>
  <v-dialog :value="dialog" :width="width" persistent>
    <v-form v-model="valid" ref="form" @submit.prevent="onFormSubmitHandler">
      <v-card class="pa-0">
        <v-card-title primary-title class="justify-center accent">
          Spare Movement Form
        </v-card-title>
        <v-container class="pa-4">
          <v-row>
            <v-col cols="12" sm="3">
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
                    v-model="spareMovementData.date"
                    label="Date"
                    prepend-inner-icon="mdi-calendar"
                    class="text-body-2"
                    outlined
                    dense
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="spareMovementData.date"
                  @input="datePickerMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="3">
              <v-select
                label="Airline"
                outlined
                dense
                v-model="spareMovementData.airline"
                :items="formSelectItems.airlineItems"
                @change="onAirlineChangeHandler"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field
                label="Flt No."
                dense
                outlined
                :rules="spareMovementRules.fltnoRules"
                v-model.trim="spareMovementData.fltno"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field
                label="Reg."
                counter="4"
                maxlength="4"
                dense
                outlined
                v-model.trim="spareMovementData.tail"
                :prefix="prefix"
                :rules="spareMovementRules.tailRules"
                @keyup="tailToUpperCase"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="pt-3">
              <v-text-field
                label="Part No."
                counter="50"
                maxlength="50"
                dense
                outlined
                @keyup="partToUpperCase"
                :rules="spareMovementRules.partRules"
                v-model.trim="spareMovementData.part"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field
                label="Description"
                counter="50"
                maxlength="50"
                outlined
                dense
                @keyup="descToUpperCase"
                :rules="spareMovementRules.descRules"
                v-model.trim="spareMovementData.desc"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-radio-group row label="Type" v-model="spareMovementData.type">
                <v-radio
                  label="Consumable"
                  color="primary"
                  value="Consumable"
                ></v-radio>
                <v-radio
                  label="Return"
                  color="secondary"
                  value="Return"
                ></v-radio>
                <v-radio label="Fluid" color="accent" value="Fluid"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" sm="4" class="pt-0">
              <v-text-field
                label="Serial No."
                counter="20"
                maxlength="20"
                dense
                outlined
                @keyup="serialToUpperCase"
                :rules="spareMovementRules.serialRules"
                v-model.trim="spareMovementData.serial"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" class="pt-0">
              <v-text-field
                label="GRN"
                counter="10"
                maxlength="10"
                dense
                outlined
                autocomplete="off"
                @keyup="grnToUpperCase"
                :rules="spareMovementRules.grnRules"
                v-model.trim="spareMovementData.grn"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" class="pt-0">
              <v-text-field
                label="Qty"
                type="number"
                outlined
                dense
                :rules="spareMovementRules.qtyRules"
                v-model.trim="spareMovementData.qty"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="pt-0">
              <v-select
                label="Store"
                outlined
                dense
                v-model="spareMovementData.store"
                :items="formSelectItems.storeItems"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" class="pt-0">
              <v-select
                label="Used By"
                outlined
                dense
                :items="formSelectItems.usedByItems"
                :rules="spareMovementRules.useByRules"
                v-model="spareMovementData.usedBy"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-btn color="primary" type="submit"
            ><v-icon small class="mr-2">mdi-check</v-icon>{{ button }}</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="secondary" @click="onCloseFormHandler"
            ><v-icon small class="mr-2">mdi-cancel</v-icon>Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SpareMovementForm',

  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    button: {
      type: String,
      default: 'Add'
    },
    spareMovementData: {
      type: Object,
      default: () => {
        return {
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
          usedBy: ''
        };
      }
    }
  },

  data() {
    return {
      valid: false,
      tail: '',
      datePickerMenu: false,
      formSelectItems: {
        airlineItems: ['ASL', 'CX', 'LD', 'PR'],
        storeItems: ['BKK', 'BKK306'],
        usedByItems: ['Boonyarit', 'Theerapong', 'Totsapon']
      },
      spareMovementRules: {}
    };
  },

  methods: {
    ...mapActions(['addSpare']),

    onFormSubmitHandler() {
      this.spareMovementRules = {
        tailRules: [v => !!v || 'Reg. is required.'],
        fltnoRules: [v => !!v || 'Flt No. is required.'],
        partRules: [v => !!v || 'Part No. is required.'],
        descRules: [v => !!v || 'Description is required'],
        serialRules: [v => !!v || 'Serial No. is required.'],
        grnRules: [v => v.length === 10 || 'GRN is required 10 characters.'],
        qtyRules: [
          v => !!v || 'Qty. is required.',
          v => v !== 0 || 'Qty. must not be 0.'
        ],
        useByRules: [v => !!v || 'Used By is required.']
      };

      this.$nextTick(() => {
        if (this.$refs.form.validate()) {
          const id = Date.now();
          const acreg = `${this.prefix}${this.spareMovementData.tail}`;
          const tail = this.tail;
          const qty = parseInt(this.spareMovementData.qty, 10);
          const issued = false;
          const issuedBy = '';
          const submitData = {
            ...this.spareMovementData,
            id,
            acreg,
            tail,
            qty,
            issued,
            issuedBy
          };
          this.addSpare(submitData);
          const formOpen = false;

          Promise.resolve().then(() => {
            this.spareMovementRules = {};
            this.onResetFormHandler();
            this.$emit('close', formOpen);
          });
        }
      });
    },

    onResetFormHandler() {
      const formData = {
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
        usedBy: ''
      };
      this.$emit('onResetForm', formData);
    },

    onAirlineChangeHandler() {
      this.$emit('onAirlineChange', '');
    },

    onCloseFormHandler() {
      const formOpen = false;
      this.$emit('close', formOpen);
    },

    tailToUpperCase() {
      this.spareMovementData.tail = this.spareMovementData.tail.toUpperCase();
    },

    partToUpperCase() {
      this.spareMovementData.part = this.spareMovementData.part.toUpperCase();
    },

    descToUpperCase() {
      this.spareMovementData.desc = this.spareMovementData.desc.toUpperCase();
    },

    serialToUpperCase() {
      this.spareMovementData.serial = this.spareMovementData.serial.toUpperCase();
    },

    grnToUpperCase() {
      this.spareMovementData.grn = this.spareMovementData.grn.toUpperCase();
    }
  },

  computed: {
    prefix() {
      let prefix = '';
      switch (this.spareMovementData.airline) {
        case 'CX':
          prefix = 'B-';
          break;
        case 'ASL':
          prefix = 'EI-';
          break;
        case 'LD':
          prefix = 'B-';
          break;
        case 'PR':
          prefix = 'RP-C';
          break;
      }
      return prefix;
    },

    width() {
      if (this.$vuetify.breakpoint.name === 'xs') {
        return '90%';
      } else return 700;
    }
  },

  watch: {
    dialog() {
      this.spareMovementRules = {};
      this.onResetFormHandler();
    }
  }
};
</script>

<style lang="scss" scoped></style>
