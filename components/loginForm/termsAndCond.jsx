import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import WarningIcon from "@mui/icons-material/Warning"; // Importa el icono de precaución
import Typography from "@mui/material/Typography";

function TermsAndConditionsCheckbox({ termsAccepted, setTermsAccepted }) {
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <FormControlLabel
        control={
          <Switch
            checked={termsAccepted}
            onChange={handleCheckboxChange}
            name="termsAccepted"
          />
        }
        label={
          <span style={{ userSelect: "none", cursor: "default" }}>
            He leído y acepto los{" "}
            <Link
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              términos y condiciones
            </Link>
          </span>
        }
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
          cursor: "default",
        }}
      >
        <WarningIcon style={{ color: "orange", marginRight: "1px" }} />
        {/* Icono de advertencia */}
        <Typography variant="caption">
          Debes aceptar los términos y condiciones para activar la cuenta.
        </Typography>
      </div>
    </div>
  );
}

export default TermsAndConditionsCheckbox;
