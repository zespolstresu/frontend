import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  marginInline: 'auto',
  maxWidth: 1000,
  '& ol': {
    counterReset: 'item',
    color: theme.palette.text.light
  },
  '& li': {
    display: 'block',
    fontWeight: 'initial',
  },
  '& em': {
    fontSize: 18,
    fontStyle: 'normal',
  },
  '& ol > li': {
    margin: theme.spacing(2,0),
    lineHeight: theme.spacing(3.5)
  },
  '& li > ol': {
    margin: theme.spacing(2,0),
    paddingLeft: theme.spacing(2)
  },
  '& li:has(ol)': {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    margin: theme.spacing(5,0),
  },
  '& li:before': {
    content: 'counters(item, ".") " "',
    counterIncrement: 'item',
    marginRight: theme.spacing(1),
    fontWeight: 700,
    color: theme.palette.secondary.main,
  }
}));