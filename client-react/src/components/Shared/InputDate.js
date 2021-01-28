import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  }
}));

const InputDate = ({ name, onDateChangeHandler, value }) => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label="Date"
        format="dd/MMM/yy"
        size="small"
        margin="none"
        inputVariant="outlined"
        name={name}
        className={classes.root}
        value={value}
        onChange={onDateChangeHandler}
      />
    </MuiPickersUtilsProvider>
  );
};

export default InputDate;
