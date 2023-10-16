import Link from "next/link";
import Typography from "@mui/material/Typography";

const LoginLink = () => {
  return (
    <div style={{ textAlign: "center", margin: "2px 0px" }}>
      <span style={{ marginRight: "8px" }}>¿Ya tienes una cuenta?</span>
      <Link href="/" passHref style={{ textDecoration: "none",color:"blue" }}>
        <Typography component="span" style={{ cursor: "pointer" }}>
          Entrar
        </Typography>
      </Link>
    </div>
  );
};

export default LoginLink;
