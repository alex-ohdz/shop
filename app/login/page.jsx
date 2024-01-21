"use client";
import React from "react";
import { Container, Box, Button, Typography, Link } from "@mui/material";
import GoogleButton from "@components/loginForm/googleButton";
import LoginLink from "@components/loginForm/loginLink";
import EmailField from "@components/loginForm/emailField";
import PasswordField from "@components/loginForm/passwordField";
import useLoginForm from "@components/loginForm/useLoginForm";
import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      // Establecer algún estado de error relacionado con el email
    }
  };

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

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      email: user.email,
      password: user.password,
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
      // Manejar error de inicio de sesión
    } else {
      console.log("Login successful");
      router.push("/rutaPostLogin"); // Redirigir a la página deseada después del inicio de sesión
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLogin}>
          <EmailField onChange={handleEmailChange} fullWidth />
          <PasswordField
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className="actionGrid"
          >
            Iniciar sesión
          </Button>
          <LoginLink
            text1={"¿ Eres nuevo en MercanciaVC ?"}
            linkText={"Crear Cuenta"}
            onLinkClick={() => {
              onClose();
              handleOpenLoginForm();
            }}
          />
          <GoogleButton onClick={() => console.log("Clicked")} />
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
