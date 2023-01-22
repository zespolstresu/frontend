import {styled, MenuItem as MuiMenuItem, Menu as MuiMenu} from '@mui/material';

export const MenuItem = styled(MuiMenuItem)(({theme}) => ({
    '& a': {
        textDecoration: 'none',
        fontWeight: '700',
        color: theme.palette.text.dark,
    }
}));

export const Menu = styled(MuiMenu)(({theme}) => ({
    '& .MuiPaper-root': {
        backgroundColor: theme.palette.background.grey
    },
}));