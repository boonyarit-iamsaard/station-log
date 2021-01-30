import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const InputText = props => {
  const { control } = useFormContext();
  const { defaultValue, label, name } = props;

  return (
    <Controller
      as={<TextField size="small" variant="outlined" />}
      control={control}
      defaultValue={defaultValue}
      name={name}
      label={label}
      fullWidth={true}
      {...props}
    />
  );
};

export default InputText;
