"use client";
import React from "react";
import { Container, Box, Button, Typography, Link } from "@mui/material";
import GoogleButton from "@components/loginForm/googleButton";
import LoginLink from "@components/loginForm/loginLink";
import EmailField from "@components/loginForm/emailField";
import PasswordField from "@components/loginForm/passwordField";
import useLoginForm from "@components/loginForm/useLoginForm";
import { signIn } from "next-auth/react";

const UserSession = () => {
  const initialUserState = {
    email: "",
    password: "",
  };

  const {
    user,
    handleChange,
    showPassword,
    handleClickShowPassword,
    handleSubmit,
  } = useLoginForm(initialUserState);
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
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <EmailField value={user.email} onChange={handleChange} />
          <PasswordField
            value={user.password}
            onChange={handleChange}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
          />
          <Button
            fullWidth
            variant="outlined"
            className="actionGrid"
            onClick={handleSubmit}
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

export default UserSession;
