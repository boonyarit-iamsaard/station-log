<template>
  <v-dialog :value="dialog" :width="width" persistent>
    <v-form v-model="valid" ref="form" @submit.prevent="onFormSubmitHandler">
      <v-card class="pa-0">
        <v-card-title primary-title class="justify-center accent">
          <span class="text--white">Spare Movement Form</span>
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
              <v-radio-group
                label="Type"
                dense
                :row="$vuetify.breakpoint.smAndUp"
                v-model="spareMovementData.type"
              >
                <v-radio
                  v-for="type in formSelectItems.typeItems"
                  :key="type.id"
                  :label="type.label"
                  :color="type.color"
                  :value="type.value"
                ></v-radio>
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
                :rules="spareMovementRules.usedByRules"
                v-model="spareMovementData.usedBy"
              ></v-select>
            </v-col>
            <v-col cols="12" class="py-0" v-if="mode === 'update'">
              <v-switch
                inset
                label="Issued ?"
                v-model="spareMovementData.issued"
              ></v-switch>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              class="pt-0"
              v-if="mode === 'update' && spareMovementData.issued"
            >
              <v-text-field
                label="Issued No."
                outlined
                dense
                :rules="spareMovementRules.issuedNoRules"
                @keyup="issuedNoToUpperCase"
                v-model="spareMovementData.issuedNo"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              class="pt-0"
              v-if="mode === 'update' && spareMovementData.issued"
            >
              <v-select
                label="Issued By"
                outlined
                dense
                :items="formSelectItems.usedByItems"
                :rules="spareMovementRules.issuedByRules"
                v-model="spareMovementData.issuedBy"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-btn color="primary" type="submit">
            <v-icon small class="mr-2">
              {{ mode === 'create' ? 'mdi-plus' : 'mdi-pencil' }}
            </v-icon>
            {{ mode }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn dark color="grey" @click="onCloseFormHandler">
            <v-icon small class="mr-2">
              mdi-cancel
            </v-icon>
            Cancel
          </v-btn>
          <v-btn
            dark
            color="secondary"
            @click="onDeleteSpareHandler"
            v-if="mode === 'update'"
          >
            <v-icon small class="mr-2">
              mdi-delete
            </v-icon>
            Delete
          </v-btn>
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
    mode: {
      type: String,
      default: 'create'
    },
    spareMovementData: {
      type: Object,
      default: () => {
        return {
          date: new Date().toISOString().substr(0, 10),
          acreg: '',
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
        typeItems: [
          { id: 1, label: 'Consumable', color: 'primary', value: 'Consumable' },
          { id: 2, label: 'Return', color: 'secondary', value: 'Return' },
          { id: 3, label: 'Fluid', color: 'accent', value: 'Fluid' }
        ],
        storeItems: ['BKK', 'BKK306'],
        usedByItems: ['Boonyarit', 'Theerapong', 'Totsapon']
      },
      spareMovementRules: {}
    };
  },

  methods: {
    ...mapActions(['addSpare', 'updateSpare', 'deleteSpare']),

    onFormSubmitHandler() {
      // const formOpen = false;

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
        usedByRules: [v => !!v || 'Used By is required.'],
        issuedNoRules: [v => !!v || 'Issued No. is required.'],
        issuedByRules: [v => !!v || 'Issued By is required.']
      };

      if (this.mode === 'create') {
        this.$nextTick(() => {
          if (this.$refs.form.validate()) {
            const id = Date.now();
            const acreg = this.acreg;
            const qty = parseInt(this.spareMovementData.qty, 10);
            const submitData = {
              ...this.spareMovementData,
              id,
              acreg,
              qty
            };
            this.addSpare(submitData);

            Promise.resolve().then(() => {
              this.spareMovementRules = {};
              this.onResetFormHandler();
              this.$emit('close', false);
            });
          }
        });
      } else {
        this.$nextTick(() => {
          if (this.$refs.form.validate()) {
            const acreg = this.acreg;
            const submitData = { ...this.spareMovementData, acreg };
            this.updateSpare(submitData);

            Promise.resolve().then(() => {
              this.spareMovementRules = {};
              this.$emit('close', false);
            });
          }
        });
      }
    },

    onResetFormHandler() {
      const formData = {
        date: new Date().toISOString().substr(0, 10),
        airline: 'CX',
        acreg: '',
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
      };
      this.$emit('onResetForm', formData);
    },

    onDeleteSpareHandler() {
      console.log(this.spareMovementData.id);
      this.deleteSpare(this.spareMovementData.id);
      this.$emit('close', false);
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
    },

    issuedNoToUpperCase() {
      this.spareMovementData.issuedNo = this.spareMovementData.issuedNo.toUpperCase();
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
    },

    acreg() {
      return `${this.prefix}${this.spareMovementData.tail}`;
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
