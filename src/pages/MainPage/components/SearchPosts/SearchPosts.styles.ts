
import { styled, IconButton, Box } from '@mui/material';

export const ClearButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  width: 45,
  height: 45,
  padding: theme.spacing(.5),
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  alignItems: 'center'
}));
