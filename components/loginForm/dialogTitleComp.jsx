import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const DialogTitleComponent = ({ onClose }) => {
  return (
    <DialogTitle
      sx={{
        userSelect: "none",
        cursor: "default",
        color: "#fff",
        backgroundColor: "#3f51b5",
        padding: "5px",
        marginBottom: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Ajustado para centrar el texto
      }}
    >
      <div style={{ marginLeft: "auto" }}>Crear Nuevo Usuario</div>

      <Button
        onClick={onClose}
        color="inherit"
        size="small"
        style={{ marginLeft: "auto" }} // Asegura que el botón esté a la derecha
      >
        <CloseIcon />
      </Button>
    </DialogTitle>
  );
};

export default DialogTitleComponent;
