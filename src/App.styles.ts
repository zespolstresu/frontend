import { Box, styled } from '@mui/material';

export const ContentWrapper = styled(Box)(({ theme }) => ({
  lineHeight: 1.5,
  '-webkit-font-smoothing': 'antialiased',
  padding: theme.spacing(2, 3),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 10,)
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 20)
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(6, 20)
  },
  '& p, h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Montserrat, sans-serif',
    overflowWrap: 'break-word'
  },
  '& h1, h2, h3, h4, h5, h6': {
    fontWeight: 700,
  },
  '& input, button, textarea, select': {
    font: 'inherit'
  },
  '& img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%'
  },
  '& a': {
    textDecoration: 'none'
  }
}));

export const AppWrapper = styled(Box)(({ theme }) => ({
  fontFamily: '"Montserrat", sans-serif',
  background: 'linear-gradient(180deg, #0D1633 0%, #14285A 27.6%, #416bd1 100%)',
  minHeight: '100vh',
}));
