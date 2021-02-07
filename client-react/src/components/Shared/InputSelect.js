import { Controller } from 'react-hook-form';
import { MenuItem, TextField } from '@material-ui/core';
import propTypes from 'prop-types';

const InputSelect = ({ control, items, label, name }) => {
  return (
    <Controller
      as={
        <TextField
          fullWidth
          select
          margin="dense"
          variant="outlined"
          name={name}
          label={label}
        >
          {items.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
      }
      control={control}
      name={name}
    />
  );
};

InputSelect.propTypes = {
  label: propTypes.string,
  items: propTypes.arrayOf(propTypes.object)
};

InputSelect.defaultProps = {
  label: 'Airline',
  items: [
    { label: 'ASL', value: 'ASL' },
    { label: 'CX', value: 'CX' },
    { label: 'LD', value: 'LD' },
    { label: 'PR', value: 'PR' }
  ]
};

export default InputSelect;
