import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const GoogleButton = ({ onClick, googleIconURL }) => {
  return (
    <Box>
    <Button
      fullWidth
      variant="outlined"
      style={{
        borderColor: "#4285F4",
        color: "#4285F4",
        boxShadow: "none",
        textTransform: "none",
        margin: "2px 0",
        padding: "10px 20px",
        borderRadius: "5px",

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
    </Box>
  );
};

export default GoogleButton;
