import Button from "@mui/material/Button";

const GoogleButton = ({ onClick, googleIconURL }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      className="google-btn "
      startIcon={
        <img
          src={googleIconURL}
          alt="Google"
          style={{ width: "20px", height: "20px" }}
        />
      }
      onClick={onClick}
    >
      Iniciar con Google
    </Button>
  );
};

export default GoogleButton;
