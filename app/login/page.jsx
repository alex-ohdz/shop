"use client";
import React from "react";
import { Container, Box, Button, Typography, Link } from "@mui/material";
import GoogleButton from "@components/loginForm/googleButton";
import LoginLink from "@components/loginForm/loginLink";
import EmailField from "@components/loginForm/emailField";
import PasswordField from "@components/loginForm/passwordField";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const router = useRouter();
  // const redirectToLogin = () => {
  //   const returnUrl = router.asPath; // Obtiene la ruta actual
  //   router.push(`/login?returnUrl=${encodeURIComponent(returnUrl)}`);
  // };

  const validateEmail = (email) => {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      // Establecer algún estado de error relacionado con el email
    }
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      // Redirigir al usuario a la ruta de origen o a una ruta predeterminada
      const returnUrl = router.query.returnUrl || "/defaultRoute";
      router.push(returnUrl);
    } catch (error) {
      console.log(error);
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
