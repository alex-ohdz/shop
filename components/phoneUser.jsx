import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AsYouType } from "libphonenumber-js";

export default function PhoneNumberInput({ value, onChange }) {
  const handleChange = (value) => {
    const phoneNumber = new AsYouType().input(value);
    onChange("phoneNumber", phoneNumber);
  };

  return (
    <PhoneInput
      country={"us"}
      value={value}
      onChange={handleChange}
      inputStyle={{ width: "100%", height: "55px" }}
    />
  );
}
