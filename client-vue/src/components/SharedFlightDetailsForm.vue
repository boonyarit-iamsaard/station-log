<template>
	<v-row>
		<FormInputDate />
		<v-col cols="12" sm="3">
			<v-select :items="airlineItems" label="Airline"></v-select>
		</v-col>
		<v-col cols="12" sm="3">
			<v-text-field label="Flt No."></v-text-field>
		</v-col>
		<v-col cols="12" sm="3">
			<v-select :items="prefixItems" label="A/C Reg."></v-select>
		</v-col>
		<v-col cols="12" sm="3">
			<v-text-field></v-text-field>
		</v-col>
	</v-row>
</template>

<script>
import FormInputDate from './FormInputDate';

export default {
	name: 'SharedFlightDetailsForm',
	components: {
		FormInputDate
	},
	data() {
		return {
			airlineItems: ['CX', 'LD', 'PR'],
			prefixItems: ['B-', 'EI-', 'RP-C']
		};
	}
};
</script>

<style lang="scss" scoped></style>
