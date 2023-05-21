import MuiEditIcon from '@mui/icons-material/Edit';
import { Box, styled } from '@mui/material';

export const EditIcon = styled(MuiEditIcon)({
  width: 20,
  height: 20,
});


export const TextModalWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  minWidth: 400,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(2),
  boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
  padding: theme.spacing(3,5),
}));