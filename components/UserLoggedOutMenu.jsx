import { MenuItem, Typography, ListItemIcon } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import LoginForm from "./loginForm";
import UserSession from "./userSession";
import { useState } from "react";

const UserLoggedOutMenu = ({ signIn, handleCloseUserMenu }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [loginFormOpen, setLoginFormOpen] = useState(false);

  const handleOpenLoginForm = () => {
    setLoginFormOpen(true);
    handleCloseUserMenu();
  };

  const handleCloseLoginForm = () => {
    setLoginFormOpen(false);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
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
      />
      <LoginForm open={loginFormOpen} onClose={handleCloseLoginForm} />
    </>
  );
};

export default UserLoggedOutMenu;
