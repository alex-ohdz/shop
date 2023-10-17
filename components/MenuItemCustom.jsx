import { MenuItem, ListItemIcon, Typography } from "@mui/material";

const MenuItemCustom = ({ icon, onClick, children }) => (
  <MenuItem onClick={onClick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <Typography textAlign="center">
      {children}
    </Typography>
  </MenuItem>
);

export default MenuItemCustom;
