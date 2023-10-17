"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import LoginForm from "./loginForm";
import UserLoggedInMenu from "./UserLoggedInMenu";
import UserLoggedOutMenu from "./UserLoggedOutMenu";

const UserNav = () => {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  const [loginFormOpen, setLoginFormOpen] = useState(false);

  const isLoading = status === "loading";

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const handleOpenLoginForm = () => {
    setLoginFormOpen(true);
  };

  const handleCloseLoginForm = () => {
    setLoginFormOpen(false);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  if (isLoading) {
    return <Skeleton variant="circular" width={40} height={40} />;
  }
  return (
    <div>
      <Box>
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
            <UserLoggedInMenu
              user={session.user}
              signOut={signOut}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          ) : (
            <UserLoggedOutMenu
              providers={providers}
              signIn={signIn}
              handleOpenLoginForm={handleOpenLoginForm}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          )}
          <LoginForm open={loginFormOpen} onClose={handleCloseLoginForm} />
        </Menu>
      </Box>
    </div>
  );
};
export default UserNav;
