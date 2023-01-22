import React from 'react';
import { Title, Wrapper } from './NotFound.styles';
import Typography from '@mui/material/Typography';

const NotFound = (): JSX.Element => {
  return (
    <Wrapper>
      <Title variant='h1'>Błąd 404 😒</Title>
      <Typography variant="body2">Strona której szukasz nie istnieje. Mogła zmienić adres, została usunięta, nigdy nie istniała lub błąd dotyczy uprawnień użytkownika zalogowanego/niezalogowanego.</Typography>
    </Wrapper>
  );
};

export default NotFound;