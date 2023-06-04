import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Wrapper from '@mui/material/Container';
import { Copyright } from '../../components';
import { loginUser } from '../../api/User.api';
import { useNavigate } from 'react-router-dom';
import { ILoginUser } from '../../types';
import { useAuthContext } from '../../context';
import { ErrorMessage } from '../Register/Register.styles';
import { TextField } from '../../styles/commonStyles';

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { setUserToken } = useAuthContext();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData: ILoginUser = {
      username: data.get('username')?.toString() || '',
      password: data.get('password')?.toString() || ''
    };
    const jwtObject = await loginUser(userData);
    if (!jwtObject) {
      setErrorMessage('Nieprawidłowy nick lub hasło');
    } else {
      const jwt = jwtObject.token;
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', jwt);
        setUserToken(jwt);
      }

      if (jwt) {
        navigate('/');
      }
    }
  };

  return (
    <>
      <Wrapper component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 40, height: 40 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h2">
            Zaloguj
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nick"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Zapamiętaj mnie"
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <Button
              type="submit"
              color='primary'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zaloguj
            </Button>
            <Link href="/register" variant="body2" style={{ textAlign: 'center', display: 'block' }}>
              Nie masz konta? Zarejestruj się!
            </Link>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Wrapper>
    </>
  );
};

export default Login;