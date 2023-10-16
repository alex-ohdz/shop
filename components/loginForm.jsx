import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import PhoneNumberInput from "./loginForm/phoneUser";
import Grid from "@mui/material/Grid";
import CustomTextField from "./loginForm/customTextField";
import GoogleButton from "./loginForm/googleButton";
import SubmitButton from "./loginForm/submitButton";
import LoginLink from "./loginForm/loginLink";
import useLoginForm from "./loginForm/useLoginForm";
import DialogTitle from "./loginForm/dialogTitleComp";
import TermsAndConditionsCheckbox from "./loginForm/termsAndCond";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export default function LoginForm({ open, onClose }) {
  const googleIconURL = "/assets/icons/google-color.svg";

  const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const {
    user,
    setUser,
    termsAccepted,
    setTermsAccepted,
    showPassword,
    isFormComplete,
    handleChange,
    handleClickShowPassword,
    handleSubmit,
  } = useLoginForm(initialUserState, open, onClose);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={open} disableEscapeKeyDown={true} disableBackdropClick={true}>
      <DialogTitle onClose={onClose} />

      <DialogContent>
        <Grid container spacing={isMobile ? 0 : 1}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Nombre"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Apellidos"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <CustomTextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <CustomTextField
          label="Contraseña"
          name="password"
          value={user.password}
          onChange={handleChange}
          type="password"
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
        />
        <Box style={{ marginTop: 15 }}>
          <PhoneNumberInput
            value={user.phoneNumber}
            onChange={(name, value) => setUser({ ...user, [name]: value })}
          />
        </Box>
      </DialogContent>
      <DialogActions style={{
   boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)"
}}>
        <Grid container spacing={0} direction="column" alignItems="stretch">
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", margin: "10px 20px" }}
          >
            <TermsAndConditionsCheckbox
              termsAccepted={termsAccepted}
              setTermsAccepted={setTermsAccepted}
            />
            <Grid item xs={12}>
              <SubmitButton
                onClick={handleSubmit}
                isFormComplete={isFormComplete}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", margin: "10px 20px" }}
          >
            <LoginLink />
          </Grid>

          <Grid item xs={12}>
            <GoogleButton
              onClick={() => console.log("Clicked")}
              googleIconURL={googleIconURL}
            />
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
