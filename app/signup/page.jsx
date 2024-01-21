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
// import useLoginForm from "@components/loginForm/useLoginForm";
import TermsAndConditionsCheckbox from "@components/loginForm/termsAndCond";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  // Y luego usarlo en el evento onChange o onBlur del campo de correo electrónico.

  // const handleChange = (e) => {
  //   console.log("Field changed:", e.target.name, "Value:", e.target.value);
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };
  // const {
  //   user,
  //   termsAccepted,
  //   setTermsAccepted,
  //   showPassword,
  //   // isFormComplete,
  //   handleChange,
  //   handleClickShowPassword,
  //   handleSubmit,
  // } = useLoginForm(initialUserState,false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const isFormValid = () => {
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      termsAccepted
    );
  };
  console.log("Número de teléfono a enviar:", phoneNumber);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimEmail = email.trim();
    const formatPNumber = phoneNumber.replace(/[\s()-]/g, "");
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      setError("All fields are necessary.");
      return;
    }
    console.log("Número de teléfono a enviar:", phoneNumber);

    try {
      const response = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: trimEmail,
          password,
          phoneNumber: formatPNumber,
        }),
      });
      if (!response.ok) {
        // Manejar la respuesta no exitosa
        const errorData = await response.json();
        console.error("User registration failed:", errorData.message);
        // Otras acciones basadas en el error
        return;
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      // Otras acciones en caso de éxito
    } catch (error) {
      console.error("Error during registration:", error);
      // Manejar errores de la solicitud fetch
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      // Establecer algún estado de error relacionado con el email
    }
  };

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
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="Apellidos"
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <EmailField onChange={handleEmailChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <PasswordField
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
            />
          </Grid>
          <Grid item xs={12} className="actionGrid">
            <PhoneNumberInput
              fullWidth
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} direction="column" alignItems="stretch">
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
                disabled={!isFormValid()}
              />
              {error && <Typography color="error">{error}</Typography>}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <LoginLink
              text1={"¿Ya tienes una cuenta?"}
              text2={"Entrar"}
              onClick={() => console.log("Clicked")}
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
