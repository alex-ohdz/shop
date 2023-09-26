import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Social() {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent={"center"} marginTop={3}>
        <EmailOutlinedIcon />
        <FacebookRoundedIcon />
        <InstagramIcon/>
      </Stack>
    </div>
  );
}