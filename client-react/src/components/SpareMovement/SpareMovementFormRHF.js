import { useForm, FormProvider } from 'react-hook-form';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import InputText from '../Shared/InputTextRHF';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 768,
    margin: '1rem auto 0',
    padding: theme.spacing(2)
  }
}));

const SpareMovementFormRHF = props => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputText name="airline" label="Airline" defaultValue="CX" />
              </Grid>
              <Grid item xs={12}>
                <InputText name="fltno" label="Flt No." defaultValue="" />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
    </FormProvider>
  );
};

export default SpareMovementFormRHF;
