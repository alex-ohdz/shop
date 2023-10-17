import React, { memo } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import WarningIcon from "@mui/icons-material/Warning";
import Typography from "@mui/material/Typography";

function TermsAndConditionsCheckbox({ termsAccepted, setTermsAccepted }) {
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={termsAccepted}
            onChange={handleCheckboxChange}
            name="termsAccepted"
          />
        }
        label={
          <Typography variant="body2" className="cursor termBody">
            He leído y acepto los{" "}
            <Link
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="termLink"
            >
              términos y condiciones
            </Link>
          </Typography>
        }
      />
      <div
        style={{
          display: "flex",
          alignItems: "initial",
          justifyContent: "initial",
          cursor: "default",
          marginBottom: 7,
        }}
      >
        <WarningIcon style={{ color: "orange", marginRight: "5px" }} />
        <Typography variant="caption">
          Debes aceptar los términos y condiciones para activar la cuenta.
        </Typography>
      </div>
    </div>
  );
}

export default memo(TermsAndConditionsCheckbox);
