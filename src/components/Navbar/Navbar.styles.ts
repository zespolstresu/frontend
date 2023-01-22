import { styled } from '@mui/material';

export const Header = styled('header')<{ isBreakpointMet: boolean }>(({ isBreakpointMet, theme }) => ({
  position: 'sticky',
  backgroundColor: isBreakpointMet ? theme.palette.background.dark : 'transparent',
  transition: '.3s ease-in-out',
  top: 0,
  zIndex: theme.zIndex.mobileStepper,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 3, 1),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1, 10, 1),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1, 20, 1),
  },
}));

export const Nav = styled('nav')(({ theme }) => ({
  '& :not(:last-child)': {
    marginRight: theme.spacing(4)
  },
  '& a': {
    color: 'whitesmoke',
    textDecoration: 'none'
  },
}));