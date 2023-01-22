import { styled } from '@mui/material';

export const Image = styled('img')(({ theme }) => ({
  borderRadius: 16,
  margin: theme.spacing(2, 0),
  objectFit: 'cover',
  backgroundSize: 'cover',
  width: 100,
  height: 100,
  [theme.breakpoints.up('sm')]: {
    width: 160,
    height: 160
  },
  [theme.breakpoints.up('md')]: {
    width: 140,
    height: 140
  },
  [theme.breakpoints.up('lg')]: {
  },
}));