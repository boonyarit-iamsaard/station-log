import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import propTypes from 'prop-types';

const InputText = ({ control, errors, label, name, type }) => {
  return (
    <Controller
      as={
        <TextField
          error={errors.hasOwnProperty(name)}
          fullWidth
          helperText={errors.hasOwnProperty(name) ? 'Required' : null}
          label={label}
          margin="dense"
          name={name}
          type={type}
          variant="outlined"
        />
      }
      name={name}
      control={control}
      rules={{ required: true }}
    />
  );
};

InputText.propTypes = {
  errors: propTypes.object
};

InputText.defaultProps = {
  errors: {}
};

export default InputText;
