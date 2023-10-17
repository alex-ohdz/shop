import Link from "next/link";
import Typography from "@mui/material/Typography";

const LoginLink = () => {
  return (
    <div className="loginCuenta">
      <Typography
        variant="body2"
        style={{
          marginRight: "8px",
          cursor: "default",
        }}
      >
        ¿Ya tienes una cuenta?{" "}
        <Link
          href="/"
          passHref
          style={{ textDecoration: "none", color: "blue" }}
        >
          Entrar
        </Link>
      </Typography>
    </div>
  );
};

export default LoginLink;
