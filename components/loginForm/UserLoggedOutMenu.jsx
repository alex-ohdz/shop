import React, { useState } from "react";
import { MenuItem, Typography, ListItemIcon, Box } from "@mui/material";
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
    <Box>
      <Link className="links" href="/login" passHref>
        <MenuItem className="itemProd" onClick={handleOpenLoginForm}>
          <ListItemIcon className="itemLink">
            <LoginIcon fontSize="small" />
          </ListItemIcon>
          <Typography>Iniciar sesión</Typography>
        </MenuItem>
      </Link>

      <Link className="links" href="/signup" passHref>
        <MenuItem className="itemProd" onClick={handleOpenLoginForm}>
          <ListItemIcon className="itemLink">
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <Typography>Crear Cuenta</Typography>
        </MenuItem>
      </Link>
    </Box>
  );
};

export default UserLoggedOutMenu;
