import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { AsYouType } from 'libphonenumber-js';
import { Box, FormControl, FormLabel } from '@mui/material';

export default function PhoneNumberInput({ value, onChange }) {
  const handleChange = (phoneValue) => {
  const phoneNumber = new AsYouType('US').input(phoneValue);
  onChange({ target: { name: 'phoneNumber', value: phoneNumber } });
};


  return (
    <FormControl fullWidth variant="outlined">
      <Box 
        sx={{
          border: 1, 
          borderRadius: 1, 
          borderColor: 'grey.500',
          position: 'relative',
          '& .react-tel-input input': {
            border: 'none',
            boxShadow: 'none',
            height: '55px' // Altura original + 5px
          },
          '& .react-tel-input .selected-flag': {
            height: '55px', // Altura original + 5px
          }
        }}
      >
        <FormLabel 
          htmlFor="phone-number" 
          sx={{ 
            position: 'absolute', 
            left: 2, 
            top: '-0.7em', 
            bgcolor: 'background.paper', 
            px: 0.5,
            fontSize: '0.85rem',
            zIndex: 10,
            transformOrigin: 'top left',
            ml: 1,
          }}
        >
          Teléfono
        </FormLabel>
        <PhoneInput
          country="us"
          value={value}
          onChange={handleChange}
          containerStyle={{ width: '100%' }}
          buttonStyle={{
            border: 'none',
            background:'white',
            height: '55px' // Altura original + 5px
          }}
          inputProps={{
            placeholder: "Ingrese su número de teléfono",
            style: { width: '100%' },
          }}
        />
      </Box>
    </FormControl>
  );
}
