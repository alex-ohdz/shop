import React from "react";
import { Dialog, DialogContent, Button } from "@mui/material";
import DialogTitle from "./dialogTitleComp";
import GoogleButton from "./googleButton";
import LoginLink from "./loginLink";
import EmailField from "./emailField";
import PasswordField from "./passwordField";
import useLoginForm from "./useLoginForm";
import { signIn } from "next-auth/react";

const UserSession = ({ open, onClose, signIn, handleOpenLoginForm }) => {
  const initialUserState = {
    email: "",
    password: "",
  };

  const { user, handleChange, showPassword, handleClickShowPassword } =
    useLoginForm(initialUserState, open, onClose);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle onClose={onClose} text={"Iniciar Sesión"} />

      <DialogContent className="actionGrid">
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
          className="btnSesion"
          onClick={signIn}
        >
          Iniciar sesión
        </Button>
        <LoginLink
          text1={"¿No tienes una cuenta?"}
          text2={"Crear Cuenta"}
          onClick={() => {
            onClose(); // Cierra UserSession
            handleOpenLoginForm(); // Abre LoginForm
          }}
        />
        <GoogleButton onClick={() => console.log("Clicked")} />
      </DialogContent>
    </Dialog>
  );
};

export default UserSession;
