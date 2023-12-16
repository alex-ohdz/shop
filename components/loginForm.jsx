import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import PhoneNumberInput from "./loginForm/phoneUser";
import EmailField from "./loginForm/emailField";
import PasswordField from "./loginForm/passwordField";
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

export default function LoginForm({
  open,
  onClose,
  handleOpenLoginForm,
  handleOpenDialog,
}) {
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
      <DialogTitle onClose={onClose} text={"Crear Nuevo Usuario"} />

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
        <EmailField value={user.email} onChange={handleChange} />
        <PasswordField
          value={user.password}
          onChange={handleChange}
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
      <DialogActions>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="stretch"
          className="actionGrid"
        >
          <Grid item xs={12}>
            <TermsAndConditionsCheckbox
              termsAccepted={termsAccepted}
              setTermsAccepted={setTermsAccepted}
            />
            <Grid item xs={12}>
              <SubmitButton
                // onClick={() => console.log("Clicked")}
                onClick={handleSubmit}
                isFormComplete={isFormComplete}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <LoginLink
              text1={"¿Ya tienes una cuenta?"}
              text2={"Entrar"}
              onClick={() => {
                onClose(); // Cierra LoginForm
                handleOpenDialog(); // Asegúrate de que esta función está definida y recibida como prop
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <GoogleButton onClick={() => console.log("Clicked")} />
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
