import { Box } from '@mui/system';
import { styled } from '@mui/material';
import MuiAccountIcon from '@mui/icons-material/SupervisedUserCircle';

export const UserData = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  marginTop: theme.spacing(10),
  '& p': {
    fontSize: 30,
    '& span': {
      color: 'gold',
      fontSize: 25
    }
  }
}));

export const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  [theme.breakpoints.up('md')]: {
    width: '50%'
  }
}));

export const ButtonsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4)
}));

export const AccountIcon = styled(MuiAccountIcon)(({ theme }) => ({
  width: 500,
  height: 500,
  opacity: .3,
  position: 'absolute',
  top: -30,
  left: -50,
}));