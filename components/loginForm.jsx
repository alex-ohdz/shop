import React, { useState, useEffect } from "react";
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
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


export default function LoginForm({ open, onClose }) {
  const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(initialUserState);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedUser = { ...user, [name]: value }; // Creando un usuario actualizado localmente
    setUser(updatedUser); // Actualizando el estado del usuario

    if (name === "password" || name === "confirmPassword") {
      setPasswordMismatch(updatedUser.password !== updatedUser.confirmPassword); // Comparando las contraseñas del usuario actualizado
    }
  };
  useEffect(() => {
    if (!open) {
      setUser(initialUserState);
      setTermsAccepted(false);
      setPasswordMismatch(false);
    }
  }, [open]);

  const handleSubmit = () => {
    console.log("Crear usuario:", user);
    onClose();
  };

  const isFieldEmpty = (field) => field === undefined || field.trim() === "";

  const isFormComplete =
    !isFieldEmpty(user.firstName) &&
    !isFieldEmpty(user.lastName) &&
    !isFieldEmpty(user.email) &&
    !isFieldEmpty(user.password) &&
    !isFieldEmpty(user.confirmPassword) &&
    !isFieldEmpty(user.phoneNumber) && // Asegurarse de que el número de teléfono no esté vacío
    !passwordMismatch &&
    termsAccepted;

  return (
    <Dialog open={open} disableEscapeKeyDown={true} disableBackdropClick={true}>
      <DialogTitle
        sx={{
          userSelect: "none",
          cursor: "default",
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#3f51b5",
          padding: "5px",
          marginBottom: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Crear Nuevo Usuario
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={1} style={{ marginBottom: 8, marginTop: 5 }}>
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
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Contraseña"
          name="password"
          type={showPassword ? "text" : "password"}
          value={user.password}
          onChange={handleChange}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Confirmar Contraseña"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          value={user.confirmPassword}
          onChange={handleChange}
          required
          error={passwordMismatch}
          helperText={passwordMismatch && "Las contraseñas no coinciden"}
          style={{ marginBottom: 24 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
      <Button
      variant="outlined"
      style={{
        borderColor: '#4285F4',
        color: '#4285F4',
        boxShadow: 'none',
        textTransform: 'none',
        margin: '10px',
      }}
      startIcon={'Poner icono de google'}
      onClick={() => console.log('Clicked')}
    >
      Iniciar sesión con Google
    </Button>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={!isFormComplete}
        >
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
}
