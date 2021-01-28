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

const InputRadioGroup = ({
  name,
  label,
  items,
  value,
  onInputChangeHandler
}) => {
  const classes = useStyles();

  return (
    <FormControl required component="fieldset" className={classes.root}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={onInputChangeHandler}
        className={classes.radioGroup}
      >
        {items.map(item => (
          <FormControlLabel
            value={item.value}
            control={<Radio />}
            label={item.text}
            key={item.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default InputRadioGroup;
