import React from 'react';
import CustomTextField from './customTextField';

const EmailField = ({ value, onChange }) => {
  return (
    <CustomTextField
      label="Email"
      name="email"
      value={value}
      onChange={onChange}
    />
  );
};

export default EmailField;