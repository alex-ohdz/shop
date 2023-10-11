import Button from "@mui/material/Button";

const GoogleButton = ({ onClick, googleIconURL }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      style={{
        borderColor: "#4285F4",
        color: "#4285F4",
        boxShadow: "none",
        textTransform: "none",
        margin: "10px 0",
      }}
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
