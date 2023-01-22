import { Box, styled, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(2),
  fontSize: 60
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center'
}));