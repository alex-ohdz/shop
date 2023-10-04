import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Link from "next/link";
import PhoneNumberInput from "./phoneUser"; 
import Grid from '@mui/material/Grid'; 

export default function LoginForm({ open, onClose }) {
  const [user, setUser] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "",
    confirmPassword: ""
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

	if (name === "password" || name === "confirmPassword") {
		setPasswordMismatch(user.password !== user.confirmPassword);
	  }
  };

  const handleSubmit = () => {
    console.log("Crear usuario:", user);
    onClose();
  };

  const isFormComplete =
    user.firstName.trim() !== "" &&
    user.lastName.trim() !== "" &&
    user.email.trim() !== "" &&
    user.password.trim() !== "" &&
    user.confirmPassword.trim() !== "" &&
    !passwordMismatch &&
    termsAccepted;

  return (
    <Dialog open={open} disableEscapeKeyDown={true} disableBackdropClick={true}>
      <DialogTitle>Crear Nuevo Usuario</DialogTitle>
      <DialogContent>
	  <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              required 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Apellidos"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              required 
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required // Esto asegura que el campo sea requerido antes de enviar el formulario
        />
        <TextField
          fullWidth
          margin="normal"
          label="Contraseña"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          required // Esto asegura que el campo sea requerido antes de enviar el formulario
        />
		 <TextField
          fullWidth
          margin="normal"
          label="Confirmar Contraseña"
          name="confirmPassword"
          type="password"
          value={user.confirmPassword}
          onChange={handleChange}
          required 
          error={passwordMismatch}
          helperText={passwordMismatch && "Las contraseñas no coinciden"}
        />
        <PhoneNumberInput
          value={user.phoneNumber}
          onChange={(name, value) => setUser({ ...user, [name]: value })}
        />
        <FormControlLabel
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
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={!isFormComplete} // Deshabilita el botón si el formulario no está completo o los términos no son aceptados
        >
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
}
