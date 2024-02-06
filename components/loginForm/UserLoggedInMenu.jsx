
import { MenuItem, Typography, ListItemIcon, Divider } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "next/link";
import Logout from "@mui/icons-material/Logout";

const UserLoggedInMenu = ({ user, signOut, handleCloseUserMenu }) => {
  const handleSignOut = () => {
    handleCloseUserMenu();
    signOut();
  };

  return (
    <>
      <MenuItem disabled style={{ justifyContent: "center" }}>
        <Typography color="textPrimary" component="div">
          {user.name}
          <div>{user.email}</div>
        </Typography>
      </MenuItem>
      <Divider />
      <Link className="links" href="/user/profile" passHref>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        <Typography textAlign="center">Perfil</Typography>
      </MenuItem>
      </Link>
      <Link className="links" href="/user/wishlist" passHref>
      <MenuItem>
        <ListItemIcon>
          <FavoriteBorderOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <Typography textAlign="center">Lista de Deseos</Typography>
      </MenuItem>
      </Link>
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
