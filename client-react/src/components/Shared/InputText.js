import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  }
}));

const InputText = ({
  label,
  name,
  required,
  type,
  value,
  onInputChangeHandler
}) => {
  const classes = useStyles();

  return (
    <TextField
      size="small"
      variant="outlined"
      type={type}
      required={required}
      onChange={onInputChangeHandler}
      name={name}
      label={label}
      value={value}
      className={classes.root}
    />
  );
};

export default InputText;
