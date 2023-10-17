import { MenuItem, Typography, ListItemIcon } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Logout from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";


const UserLoggedInMenu = ({ user, signOut, handleCloseUserMenu }) => (
  <>
    <MenuItem disabled style={{ justifyContent: "center" }}>
      <Typography color="textPrimary">
        {user.name}
        <Typography color="textPrimary">{user.email}</Typography>
      </Typography>
    </MenuItem>
    <Divider />
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
);

export default UserLoggedInMenu;
