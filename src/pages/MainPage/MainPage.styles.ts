import { styled, Grid, Typography } from '@mui/material';

export const Wall = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const StickySidebar = styled(Grid)(({ theme }) => ({
  display: 'flex',
  position: 'sticky',
  alignSelf: 'flex-start',
  top: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
  gap: theme.spacing(3),
  flexDirection: 'column',
}));

export const Slogan = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.light
}));

