import { styled, Autocomplete, Box, Button as MuiButton, TextareaAutosize, Typography } from '@mui/material';
import { makeFontStyles } from '../../utils/styleSnippets';
import SendIcon from '@mui/icons-material/Send';

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.grey,
  borderRadius: theme.spacing(1),
  ...makeFontStyles(12, '15px'),
  padding: theme.spacing(1, 1, 1, 2),
  '& h2': {
    ...makeFontStyles(20, '15px', theme.palette.text.light),
    margin: theme.spacing(1.5, 0, 2)
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.5, 1.5, 1.5, 2.5),
  },
  [theme.breakpoints.up('md')]: {
    ...makeFontStyles(14, '17.5px'),

  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(1.5, 1.5, 1.5, 3.5),
    ...makeFontStyles(16, '17.5px'),
  },
}));

export const PublishIcon = styled(SendIcon)(({ theme }) => ({
  fill: theme.palette.primary.main,
  width: 28,
  height: 28
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}));

export const Button = styled(MuiButton)({
  alignSelf: 'flex-end',
});

export const Textarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  minHeight: 70,
  padding: theme.spacing(2),
  resize: 'none',
  border: 'none',
  backgroundColor: theme.palette.background.darkGrey,
  borderRadius: theme.spacing(1),
  fontWeight: '500 !important',
  '&:focus': {
    boxShadow: 'none',
    border: 'none',
    outline: `1px solid ${theme.palette.text.dark}`
  }
}));

export const AutoComplete = styled(Autocomplete)({
  maxWidth: 200,
});

export const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.dark,
  marginBottom: theme.spacing(1.5)
}));
