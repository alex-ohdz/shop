import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Link from "next/link";
import PhoneNumberInput from "./phoneUser";
import Grid from "@mui/material/Grid";
import CustomTextField from "./loginForm/customTextField";
import GoogleButton from "./loginForm/googleButton";
import SubmitButton from "./loginForm/submitButton";
import LoginLink from "./loginForm/loginLink";
import useLoginForm from "./loginForm/useLoginForm";
import DialogTitle from "./loginForm/dialogTitleComp";

export default function LoginForm({ open, onClose }) {
  const googleIconURL = "/assets/icons/google-color.svg";

  const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    user,
    setUser,
    termsAccepted,
    setTermsAccepted,
    passwordMismatch,
    showPassword,
    isFormComplete,
    handleChange,
    handleClickShowPassword,
    handleSubmit,
  } = useLoginForm(initialUserState, open, onClose);

  return (
    <Dialog open={open} disableEscapeKeyDown={true} disableBackdropClick={true}>
       <DialogTitle onClose={onClose} />

      <DialogContent>
        <Grid container spacing={1} style={{ marginBottom: 8, marginTop: 5 }}>
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
        <CustomTextField
          label="Confirmar Contraseña"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          type="password"
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          error={passwordMismatch}
          helperText={passwordMismatch && "Las contraseñas no coinciden"}
          style={{ marginBottom: 24 }}
        />
        <PhoneNumberInput
          value={user.phoneNumber}
          onChange={(name, value) => setUser({ ...user, [name]: value })}
        />
        <FormControlLabel
          style={{ marginTop: 12 }}
          control={
            <Switch
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              name="termsAccepted"
            />
          }
          label={
            <span>
              Acepto los{" "}
              <Link
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                términos y condiciones
              </Link>
            </span>
          }
        />
      </DialogContent>
      <DialogActions>
        <Grid container spacing={1} direction="column" alignItems="stretch">
          <Grid item xs={12}>
            <SubmitButton
              onClick={handleSubmit}
              isFormComplete={isFormComplete}
            />
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
