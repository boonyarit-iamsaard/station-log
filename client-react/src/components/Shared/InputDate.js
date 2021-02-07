import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Controller } from 'react-hook-form';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const InputDate = ({ control, name }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ ref, ...props }) => (
          <KeyboardDatePicker
            autoOk
            format="dd/MMM/yy"
            fullWidth
            id="date-picker-dialog"
            inputVariant="outlined"
            label="Date"
            margin="dense"
            {...props}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};

export default InputDate;
