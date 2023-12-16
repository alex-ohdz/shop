import React from 'react';
import { MenuItem, Typography, ListItemIcon, Divider } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Logout from "@mui/icons-material/Logout";

const UserLoggedInMenu = ({ user, signOut, handleCloseUserMenu }) => {
  const handleSignOut = () => {
    handleCloseUserMenu();
    signOut();
  };

  const handleProfileClick = () => {
    // Lógica para manejar el clic en el perfil
    handleCloseUserMenu();
  };

  const handleWishlistClick = () => {
    // Lógica para manejar el clic en la lista de deseos
    handleCloseUserMenu();
  };

  return (
    <>
      <MenuItem disabled style={{ justifyContent: "center" }}>
        <Typography color="textPrimary">
          {user.name}
          <Typography color="textPrimary">{user.email}</Typography>
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleProfileClick}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        <Typography textAlign="center">Perfil</Typography>
      </MenuItem>
      <MenuItem onClick={handleWishlistClick}>
        <ListItemIcon>
          <FavoriteBorderOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <Typography textAlign="center">Lista de Deseos</Typography>
      </MenuItem>
      <MenuItem onClick={handleSignOut}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <Typography textAlign="center">Cerrar sesión</Typography>
      </MenuItem>
    </>
  );
};

export default UserLoggedInMenu;
