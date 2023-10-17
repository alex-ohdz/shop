import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  const googleIconURL = "/assets/icons/google-color.svg";
  const handleGoogleSignIn = async () => {
    await signIn("google");
  };
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
      onClick={handleGoogleSignIn}
    >
      Iniciar sesión con Google
    </Button>
  );
};

export default GoogleButton;
