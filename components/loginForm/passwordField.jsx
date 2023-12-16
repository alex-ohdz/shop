import React from 'react';
import CustomTextField from './customTextField';

const PasswordField = ({ value, onChange, showPassword, handleClickShowPassword }) => {
  return (
    <CustomTextField
      label="Contraseña"
      name="password"
      type="password"
      value={value}
      onChange={onChange}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
    />
  );
};

export default PasswordField;