import React, { useState } from "react";
import { MenuItem, Typography, ListItemIcon } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Link from "next/link";

const UserLoggedOutMenu = ({ handleCloseUserMenu }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenLoginForm = () => {
    setDialogOpen(true);
    handleCloseUserMenu();
  };

  return (
    <>
      <Link className="links" href="/auth/login" passHref>
        <MenuItem onClick={handleOpenLoginForm}>
          <ListItemIcon>
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          <Typography>Iniciar sesión</Typography>
        </MenuItem>
      </Link>

      <Link className="links" href="/auth/signup" passHref>
        <MenuItem onClick={handleOpenLoginForm}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <Typography>Crear Cuenta</Typography>
        </MenuItem>
      </Link>
    </>
  );
};

export default UserLoggedOutMenu;
