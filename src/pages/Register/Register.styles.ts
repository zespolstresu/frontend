import { Link, styled, Typography, FormControlLabel } from '@mui/material';

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.secondary.main
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  display: 'block',
  fontSize: 14
}));

export const ControlLabel = styled(FormControlLabel)(({ theme }) => ({
  fontSize: 16,
  '& .MuiTypography-root': {
    color: theme.palette.text.light
  }
}));