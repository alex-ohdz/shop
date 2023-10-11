import TextField from "@mui/material/TextField";
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomTextField = ({ label, name, value, onChange, type, error, helperText, showPassword, handleClickShowPassword }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required
      type={type === "password" && showPassword ? "text" : type}
      error={error}
      helperText={helperText}
      InputProps={type === "password" ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      } : {}}
    />
  );
};

export default CustomTextField;
