import { styled, Typography, Box, Button } from '@mui/material';
import gradientColors from '../../utils/gradientColors';
import { makeBorder } from '../../utils/styleSnippets';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 36,
  margin: theme.spacing(1,0,3),
  backgroundImage: 'linear-gradient(270deg, rgba(14,176,179,1) 0%, rgba(218,150,1,1) 100%)',
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  color: 'transparent !important',
  maxWidth: '230px'
}));

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: gradientColors['other'],
  border: makeBorder(theme.palette.text.lightBorder),
  backdropFilter: 'blur(12.5px)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(6, 5),
  maxWidth: 450
}));

export const Submit = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginInline: 'auto'
}));

export const Content = styled(Typography)({
  fontSize: '18px !important',
});