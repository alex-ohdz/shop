import Link from "next/link";
import Typography from "@mui/material/Typography";

const LoginLink = ({ text1, text2,url }) => {
  return (
    <div className="loginCuenta cursor">
      <Typography
        variant="body2"
        style={{
          marginRight: "8px",
        }}
      >
        {text1}{" "}
        <Link
          href={url}
          passHref
          style={{ textDecoration: "none", color: "blue" }}
        >
          {text2}
        </Link>
      </Typography>
    </div>
  );
};

export default LoginLink;
