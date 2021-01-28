import { MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  }
}));

const InputSelect = ({
  items,
  label,
  name,
  required,
  value,
  onInputChangeHandler
}) => {
  const classes = useStyles();

  return (
    <TextField
      select
      size="small"
      variant="outlined"
      name={name}
      label={label}
      required={required}
      value={value}
      onChange={onInputChangeHandler}
      className={classes.root}
    >
      {items.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.text}
        </MenuItem>
      ))}
    </TextField>
  );
};

InputSelect.propTypes = {
  label: propTypes.string,
  items: propTypes.arrayOf(propTypes.object)
};

InputSelect.defaultProps = {
  label: 'Airline',
  items: [
    { text: 'ASL', value: 'ASL' },
    { text: 'CX', value: 'CX' },
    { text: 'LD', value: 'LD' },
    { text: 'PR', value: 'PR' }
  ]
};

export default InputSelect;
