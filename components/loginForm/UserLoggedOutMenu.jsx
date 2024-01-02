import { MenuItem, Typography, ListItemIcon } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { useState } from "react";
import Link from "next/link";

const UserLoggedOutMenu = ({ signIn, handleCloseUserMenu }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [loginFormOpen, setLoginFormOpen] = useState(false);

  const handleOpenLoginForm = () => {
    setLoginFormOpen(true);
    setDialogOpen(false); 
    handleCloseUserMenu();
  };


  return (
    <>
      <MenuItem onClick={handleOpenLoginForm}>
        <ListItemIcon>
          <LoginIcon fontSize="small" />
        </ListItemIcon>
        <Link className="links" href="/auth/login">
        <Typography>Iniciar sesión</Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleOpenLoginForm}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        <Link className="links" href="/auth/signup">
        <Typography>Crear Cuenta</Typography>
        </Link>
      </MenuItem>

    </>
  );
};

export default UserLoggedOutMenu;
