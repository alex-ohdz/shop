import Typography from "@mui/material/Typography";

const LoginLink = ({ text1, linkText, onLinkClick }) => {
  return (
    <div className="loginCuenta cursor">
      <Typography variant="body2" style={{ marginRight: "8px" }}>
        {text1}{" "}
        <span onClick={onLinkClick} style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>
          {linkText}
        </span>
      </Typography>
    </div>
  );
};

export default LoginLink;
