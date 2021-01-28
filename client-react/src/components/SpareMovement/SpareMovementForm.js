import { useState } from 'react';

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

const SpareMovementForm = () => {
  const classes = useStyles();
  const [dateInput, setDateInput] = useState(new Date());
  const [formInput, setFormInput] = useState({
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
  });

  const nameItems = [
    { text: 'Boonyarnt', value: 'Boonyarit' },
    { text: 'Theerapong', value: 'Theerapong' },
    { text: 'Totsapon', value: 'Totsapon' }
  ];

  const typeItems = [
    { text: 'Consumable', value: 'consumable' },
    { text: 'Return', value: 'return' },
    { text: 'Fluid', value: 'fluid' }
  ];

  const onDateChangeHandler = date => {
    setDateInput(date);
  };

  const onInputChangeHandler = e => {
    const { target } = e;
    const { name, value } = target;

    setFormInput({
      ...formInput,
      [name]: value
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();

    console.log({ ...formInput, date: dateInput });

    setFormInput({
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
    });
    setDateInput(new Date());
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <InputDate
                name="date"
                value={dateInput}
                onDateChangeHandler={onDateChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputSelect
                label="Airline"
                name="airline"
                value={formInput.airline}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputText
                label="Flt No."
                name="fltno"
                required={true}
                value={formInput.fltno}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputText
                label="Reg."
                name="reg"
                required={true}
                value={formInput.reg}
                onInputChangeHandler={onInputChangeHandler}
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
                required={true}
                value={formInput.part}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <InputText
                label="Description"
                name="desc"
                required={true}
                value={formInput.desc}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <InputRadioGroup
                label="Type"
                name="type"
                value={formInput.type}
                items={typeItems}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputText
                label="Serial No."
                name="serial"
                required={true}
                value={formInput.serial}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputText
                label="GRN"
                name="grn"
                required={true}
                value={formInput.grn}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputText
                label="Qty"
                name="qty"
                type="number"
                required={true}
                value={formInput.qty}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputSelect
                label="Store"
                name="store"
                items={[
                  { text: 'BKK', value: 'BKK' },
                  { text: 'BKK306', value: 'BKK306' }
                ]}
                value={formInput.store}
                onInputChangeHandler={onInputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputSelect
                label="Used By"
                name="usedBy"
                required={true}
                items={nameItems}
                value={formInput.usedBy}
                onInputChangeHandler={onInputChangeHandler}
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
