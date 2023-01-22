import {styled, Grid, Typography} from '@mui/material';

export const ContactFormWrapper = styled(Grid)({

});

export const ContactForm = styled('form')({

});

export const Email = styled(Typography)(({theme}) => ({
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(2),
    fontSize: 30
}))