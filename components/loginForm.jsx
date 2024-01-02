import React from "react";
import PhoneNumberInput from "./loginForm/phoneUser";
import EmailField from "./loginForm/emailField";
import PasswordField from "./loginForm/passwordField";
import Grid from "@mui/material/Grid";
import CustomTextField from "./loginForm/customTextField";
import GoogleButton from "./loginForm/googleButton";
import SubmitButton from "./loginForm/submitButton";
import LoginLink from "./loginForm/loginLink";
import useLoginForm from "./loginForm/useLoginForm";
import TermsAndConditionsCheckbox from "./loginForm/termsAndCond";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function LoginForm({ handleOpenDialog }) {
  const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
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
  } = useLoginForm(initialUserState);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" textAlign="center" sx={{ mt: 2, mb: 4 }}>
        Crear Cuenta
      </Typography>

      <Box
        component="form"
        noValidate
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit = { handleSubmit };
        }}
      >
        <Grid container spacing={isMobile ? 1 : 2}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Nombre"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Apellidos"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <EmailField value={user.email} onChange={handleChange} fullWidth />
        <PasswordField
          value={user.password}
          onChange={handleChange}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          fullWidth
        />
        <Box sx={{ mt: 2 }}>
          <PhoneNumberInput
            value={user.phoneNumber}
            onChange={(name, value) => setUser({ ...user, [name]: value })}
          />
        </Box>

        <TermsAndConditionsCheckbox
          termsAccepted={termsAccepted}
          setTermsAccepted={setTermsAccepted}
        />
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          isFormComplete={isFormComplete}
        >
          Registrar Ahora
        </SubmitButton>

        <LoginLink
          text1={"¿Ya tienes una cuenta?"}
          text2={"Entrar"}
          onClick={handleOpenDialog}
        />

        <GoogleButton onClick={() => console.log("Clicked")} />
      </Box>
    </Container>
  );
}
