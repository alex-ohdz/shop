import { Dialog, DialogContent, Button } from "@mui/material";
import DialogTitle from "./loginForm/dialogTitleComp";
import GoogleButton from "./loginForm/googleButton";
import LoginLink from "./loginForm/loginLink";

const UserSession = ({ open, onClose, signIn, handleOpenLoginForm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle onClose={onClose} text={"Inicio de Sesión"} />

      <DialogContent className="actionGrid">
        <Button
          fullWidth
          variant="outlined"
          className="btnSesion"
          onClick={handleOpenLoginForm}
        >
          Iniciar sesión en MercanciaVC
        </Button>

        <GoogleButton onClick={() => console.log("Clicked")} />
        <LoginLink text1={"¿No tienes una cuenta?"} text2={"Crear Cuenta"} url={"/ofertas"}/>
      </DialogContent>
    </Dialog>
  );
};

export default UserSession;
