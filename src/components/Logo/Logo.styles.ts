import { styled } from '@mui/material';

export const StyledLogo = styled('img')(({ theme }) => ({
  filter: 'invert(100%) contrast(300%)',
  width: '110px',
  height: 'auto',
  [theme.breakpoints.up('md')]: {
    width: '116px'
  },
  [theme.breakpoints.up('lg')]: {
    width: '120px'
  }
}));
