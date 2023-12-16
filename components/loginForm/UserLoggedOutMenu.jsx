import { MenuItem, Typography, ListItemIcon } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import LoginForm from "../loginForm";
import UserSession from "./userSession";
import { useState } from "react";

const UserLoggedOutMenu = ({ signIn, handleCloseUserMenu }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [loginFormOpen, setLoginFormOpen] = useState(false);

  const handleOpenLoginForm = () => {
    setLoginFormOpen(true);
    setDialogOpen(false); // Cierra UserSession al abrir LoginForm
    handleCloseUserMenu();
  };

  const handleCloseLoginForm = () => {
    setLoginFormOpen(false);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
    setLoginFormOpen(false); // Cierra LoginForm al abrir UserSession
    handleCloseUserMenu();
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <MenuItem onClick={handleOpenDialog}>
        <ListItemIcon>
          <LoginIcon fontSize="small" />
        </ListItemIcon>
        <Typography>Iniciar sesión</Typography>
      </MenuItem>
      <MenuItem onClick={handleOpenLoginForm}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        <Typography>Crear Cuenta</Typography>
      </MenuItem>

      <UserSession
        open={dialogOpen}
        onClose={handleCloseDialog}
        signIn={signIn}
        handleOpenLoginForm={handleOpenLoginForm} // Pasar la función como prop
      />
      <LoginForm
        open={loginFormOpen}
        onClose={handleCloseLoginForm}
        handleOpenDialog={handleOpenDialog} // Pasa la función como prop
      />
    </>
  );
};

export default UserLoggedOutMenu;
