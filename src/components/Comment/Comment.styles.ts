import { styled, Box } from '@mui/material';

export const Container = styled(Box)(({theme}) => ({
  padding: theme.spacing(1,2),
  borderRadius: theme.spacing(1),
  backgroundColor: 'gold',
}));