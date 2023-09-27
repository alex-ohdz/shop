"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const UserNav = () => {
  const { data: session,status } = useSession();
  const [providers, setProviders] = useState(null);
  const isLoading = status === 'loading';

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  if (isLoading) {
    return  <Skeleton variant="circular" width={40} height={40} />; 
  }
  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Usuario">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="" src={session?.user.image} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {session ? (
            <>
              <MenuItem disabled onClick={handleCloseUserMenu}>
                <Typography variant="h6" color="textPrimary">
                  {session.user.name}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <Typography onClick={""} textAlign="center">
                  Perfil
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
              <ListItemIcon>
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                <Typography onClick={""} textAlign="center">
                  Lista de Deseos
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <Typography onClick={signOut} textAlign="center">
                  Cerrar sesión
                </Typography>
              </MenuItem>
            </>
          ) : (
            providers &&
            Object.values(providers).map((provider) => (
              <>
                <MenuItem key={provider.name} onClick={handleCloseUserMenu}>
                  <Typography
                    onClick={() => signIn(provider.id)}
                    textAlign="center"
                  >
                    Iniciar sesión
                  </Typography>
                </MenuItem>
                <MenuItem key={provider.name} onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  <Typography onClick={""} textAlign="center">
                    Crear Cuenta
                  </Typography>
                </MenuItem>
              </>
            ))
          )}
        </Menu>
      </Box>
    </div>
  );
};
export default UserNav;
