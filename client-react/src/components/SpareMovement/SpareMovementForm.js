// import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import InputDate from '../Shared/InputDate';
import InputRadioGroup from '../Shared/InputRadioGroup';
import InputSelect from '../Shared/InputSelect';
import InputText from '../Shared/InputText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 768,
    margin: '0 auto',
    padding: theme.spacing(2)
  },
  cardActions: {
    padding: theme.spacing(2),
    justifyContent: 'space-between'
  }
}));

const defaultValues = {
  date: new Date(),
  airline: 'CX',
  fltno: '',
  reg: '',
  part: '',
  desc: '',
  type: 'consumable',
  serial: 'NIL',
  grn: '',
  qty: 0,
  store: 'BKK',
  usedBy: ''
};

const SpareMovementForm = () => {
  const { control, errors, handleSubmit } = useForm({ defaultValues });
  const classes = useStyles();
  // const [submittedData, setSubmittedData] = useState(null);

  const nameItems = [
    { label: 'Boonyarnt', value: 'Boonyarit' },
    { label: 'Theerapong', value: 'Theerapong' },
    { label: 'Totsapon', value: 'Totsapon' }
  ];

  const typeItems = [
    { label: 'Consumable', value: 'consumable' },
    { label: 'Return', value: 'return' },
    { label: 'Fluid', value: 'fluid' }
  ];

  const onSubmit = data => {
    console.log(data);
    // setSubmittedData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <InputDate control={control} name="date" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputSelect
                label="Airline"
                name="airline"
                control={control}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputText
                label="Flt No."
                name="fltno"
                control={control}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputText
                label="Reg."
                name="reg"
                control={control}
                errors={errors}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputText
                label="Part No."
                name="part"
                control={control}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <InputText label="Description" name="desc" control={control} />
            </Grid>
            <Grid item xs={12}>
              <InputRadioGroup
                control={control}
                items={typeItems}
                label="Type"
                name="type"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputText
                label="Serial No."
                name="serial"
                control={control}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputText
                label="GRN"
                name="grn"
                control={control}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputText
                label="Qty"
                name="qty"
                type="number"
                control={control}
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputSelect
                label="Store"
                name="store"
                items={[
                  { label: 'BKK', value: 'BKK' },
                  { label: 'BKK306', value: 'BKK306' }
                ]}
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputSelect
                label="Used By"
                name="usedBy"
                items={nameItems}
                control={control}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button variant="contained">Close</Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default SpareMovementForm;
