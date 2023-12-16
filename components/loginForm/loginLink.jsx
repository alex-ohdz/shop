import Typography from "@mui/material/Typography";

const LoginLink = ({ text1, text2, onClick }) => {
  return (
    <div className="loginCuenta cursor">
      <Typography variant="body2" style={{ marginRight: "8px" }}>
        {text1}{" "}
        <span onClick={onClick} style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>
          {text2}
        </span>
      </Typography>
    </div>
  );
};

export default LoginLink;
