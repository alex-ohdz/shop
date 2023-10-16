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
          style={{
            fontSize: "14px",
            boxShadow: !isFormComplete
              ? "none"
              : "0 3px 5px 2px rgba(0, 70, 140, .3)",
            padding: "10px 20px",
            background: !isFormComplete ? "#D3D3D3" : "#00468C",
            borderRadius: "5px",
            border: "none",
            color: "white",
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          Crear cuenta
        </Button>
      </span>
    </Tooltip>
   
  );
};

export default SubmitButton;
