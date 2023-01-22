import { Typography, Link } from '@mui/material';
import React from 'react';

const Copyright = (props: any): JSX.Element => {
  return (
    <Typography variant="body2" color="secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        SpotUS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;