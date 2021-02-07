import { Controller } from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  radioGroup: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  }
}));

const InputRadioGroup = ({ control, name, items, label }) => {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        as={
          <RadioGroup className={classes.radioGroup}>
            {items.map(item => (
              <FormControlLabel
                value={item.value}
                control={<Radio />}
                label={item.label}
                key={item.value}
              />
            ))}
          </RadioGroup>
        }
        name={name}
        control={control}
      />
    </FormControl>
  );
};

export default InputRadioGroup;
