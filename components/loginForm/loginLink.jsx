import Link from "next/link";
import Typography from "@mui/material/Typography";

const LoginLink = ({ text1, text2, url }) => {
  return (
    <div className="loginCuenta">
      <Typography
        variant="body2"
        style={{
          marginRight: "8px",
          cursor: "default",
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
