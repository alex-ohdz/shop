import { IconButton } from "@mui/material";

const LogoComponent = () => {
  const logoUrl = "/assets/images/LogoN.png";

  return (
    <IconButton aria-label="logo" id="logoNav">
      <img alt="Logo" src={logoUrl} id="imgLogo" />
    </IconButton>
  );
}

export default LogoComponent;
