import Button from "@mui/material/Button";

const SubmitButton = ({ onClick, isFormComplete }) => {
  return (
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
      }}
    >
      Crear cuenta
    </Button>
  );
};

export default SubmitButton;
