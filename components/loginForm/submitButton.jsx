import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const SubmitButton = ({ onClick, isFormComplete }) => {
  return (
    
    <Tooltip
      title={isFormComplete ? "" : "Complete todos los campos"}
      arrow
    >
      <span>
        <Button
          fullWidth
          onClick={onClick}
          color="primary"
          disabled={!isFormComplete}
          variant="contained"
          className={`submit-btn ${isFormComplete ? 'enabled' : 'disabled'}`}
        >
          Crear cuenta
        </Button>
      </span>
    </Tooltip>
   
  );
};

export default SubmitButton;
