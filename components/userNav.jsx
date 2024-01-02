import * as React from "react";
import { Box, IconButton, Menu, Avatar, Tooltip, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import UserLoggedInMenu from "./loginForm/UserLoggedInMenu";
import UserLoggedOutMenu from "./loginForm/UserLoggedOutMenu";

const UserNav = () => {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

  const handleOpenRegisterForm = () => setIsRegisterFormOpen(true);
  const isLoading = status === "loading";
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  useEffect(() => {
    getProviders().then(setProviders);
  }, []);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  if (isLoading) return <Skeleton variant="circular" width={40} height={40} />;

  return (
    <div>
      <Box>
        <Tooltip title="Usuario">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="" src={session?.user?.image} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {session ? (
            <UserLoggedInMenu user={session.user} signOut={signOut} handleCloseUserMenu={handleCloseUserMenu} />
          ) : (
            <UserLoggedOutMenu providers={providers} signIn={signIn} handleOpenLoginForm={handleOpenRegisterForm} handleCloseUserMenu={handleCloseUserMenu} />
          )}
        </Menu>
      </Box>
    </div>
  );
};

export default UserNav;
