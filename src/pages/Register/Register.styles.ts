import { styled, Typography } from '@mui/material';

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.secondary.main
}));