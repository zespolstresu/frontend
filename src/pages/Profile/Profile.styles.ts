import { Box } from '@mui/system';
import { styled, TextField as MuiTextField } from '@mui/material';

export const UserData = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginTop: theme.spacing(6)
}));

export const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  [theme.breakpoints.up('md')]: {
    width: '50%'
  }
}));