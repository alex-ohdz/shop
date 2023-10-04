import * as React from 'react';
import Stack from '@mui/material/Stack';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Social() {
  return (
    <div>
      <Stack direction="row" spacing={3} justifyContent={"center"} marginTop={3}>
        <EmailOutlinedIcon />
        <FacebookRoundedIcon />
        <InstagramIcon/>
      </Stack>
    </div>
  );
}