import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const DialogTitleComponent = ({ onClose , text }) => {
  return (
    <DialogTitle
    className="cursor"
      sx={{
        color: "#fff",
        backgroundColor: "#1976d2",
        padding: "3px",
        marginBottom: "4px",
        fontSize: "1.5rem",
        fontWeight: "bold",
        display: "flex",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        alignItems: "center",
        justifyContent: "center", 
      }}
    >
      <div style={{ margin:"auto" }}>{text}</div>

      <Button
        onClick={onClose}
        color="inherit"
        size="small"
        className="btnFClose"
        
      >
        <CloseIcon className="btnClose"/>
      </Button>
    </DialogTitle>
  );
};

export default DialogTitleComponent;
