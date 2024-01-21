import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const SubmitButton = ({disabled}) => {
  return (
    <Button
      type="submit"
      fullWidth
      color="primary"
      disabled={disabled}
      variant="contained"
      className={`submit-btn ${!disabled ? "enabled" : "disabled"}`}
    >
      Crear cuenta
    </Button>
  );
};

export default SubmitButton;
