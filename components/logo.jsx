import { IconButton } from "@mui/material";

function LogoComponent() {
  const logoUrl = "./assets/images/logoN.png";

  return (
    <IconButton aria-label="logo" id="logoNav">
      <img alt="Logo" src={logoUrl} id="imgLogo" />
    </IconButton>
  );
}

export default LogoComponent;
