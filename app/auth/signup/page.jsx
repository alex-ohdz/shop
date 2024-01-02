"use client";
import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import PhoneNumberInput from "@components/loginForm/phoneUser";
import EmailField from "@components/loginForm/emailField";
import PasswordField from "@components/loginForm/passwordField";
import CustomTextField from "@components/loginForm/customTextField";
import GoogleButton from "@components/loginForm/googleButton";
import SubmitButton from "@components/loginForm/submitButton";
import LoginLink from "@components/loginForm/loginLink";
import useLoginForm from "@components/loginForm/useLoginForm";
import TermsAndConditionsCheckbox from "@components/loginForm/termsAndCond";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function LoginForm({  handleOpenDialog }) {
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
    <Container component="main" maxWidth="xs" sx={{ mt: 3, mb: 3 }}>
      <Typography component="h1" variant="h5" textAlign="center">
        Crear cuenta
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={isMobile ? 0 : 1}>
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
        <Grid
          container
          spacing={0}
        >
          <Grid item xs={12}>
            <EmailField value={user.email} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <PasswordField
              value={user.password}
              onChange={handleChange}
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
            />
          </Grid>
          <Grid item xs={12} className="actionGrid">
            <PhoneNumberInput
              fullWidth
              value={user.phoneNumber}
              onChange={(name, value) => setUser({ ...user, [name]: value })}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <TermsAndConditionsCheckbox
              termsAccepted={termsAccepted}
              setTermsAccepted={setTermsAccepted}
            />
            <Grid item xs={12}>
              <SubmitButton
                type="submit"
                fullWidth
                variant="contained"
                isFormComplete={isFormComplete}
              >
                Registrar Ahora
              </SubmitButton>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <LoginLink
              text1={"¿Ya tienes una cuenta?"}
              text2={"Entrar"}
              onClick={() => {
                handleOpenDialog();
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <GoogleButton onClick={() => console.log("Clicked")} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
