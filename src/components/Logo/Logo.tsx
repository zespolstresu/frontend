import { Link } from '@mui/material';
import React from 'react';
import { StyledLogo } from './Logo.styles';

const Logo = (): JSX.Element => (
  <Link href='/' >
    <StyledLogo src='logo.png' alt="SpotUs" />
  </Link>
);

export default Logo;