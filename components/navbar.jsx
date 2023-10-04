"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomizedMenus from "./buttonNav.jsx";
import SearchNav from "./searchNav.jsx";
import UserNav from "./userNav.jsx";
// import Login from "./user.jsx";
import Social from "./social.jsx";
import CarshopNav from "./carshopNav.jsx";
import LogoComponent from "./logo.jsx";

const drawerWidth = 240;

const navItems = [
  { nombre: "Alimentos", url: "/productos/alimentos" },
  { nombre: "Aseo Personal", url: "/productos/aseo-personal" },
  { nombre: "Limpieza del hogar", url: "/productos/limpieza-del-hogar" },
  { nombre: "Electrodomésticos", url: "/productos/electrodomesticos" },
  { nombre: "Ferretería", url: "/productos/ferreteria" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link
        href="/"
        passHref
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography className="homeBtn" variant="h6" sx={{ my: 2 }}>
          MercanciaVC
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            key={item.nombre}
            href={`${item.url}`}
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem key={item.nombre} disablePadding className="listDrawer">
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.nombre} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Divider />
        <Social />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Link
                href="/"
                passHref
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <LogoComponent />
              </Link>
              <CustomizedMenus />
              <Link
                href={"/ofertas"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button className="ofBtn" sx={{ color: "inherit" }}>
                  {"Ofertas"}
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "flex" } }}>
            <SearchNav />
            <CarshopNav />
            <UserNav />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              maxHeight: "55vh",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}

export default DrawerAppBar;
