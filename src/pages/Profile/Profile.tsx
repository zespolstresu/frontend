import React, { useState, useEffect } from 'react';
import { Heading } from '../../styles/commonStyles';
import { UserData, Container } from './Profile.styles';
import { getUserData, deleteUser, updateUser } from '../../api/User.api';
import { Typography, Button, TextField, Box } from '@mui/material';
import { IUser } from './Profile.types';
import { useNavigate } from 'react-router-dom';
// import { Modal as DeleteAccount } from './components';
import { IUpdateUser } from '../../types';
import { ErrorMessage } from '../Register/Register.styles';
import { initialState } from './Profile.constants';

const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState<IUser>(initialState);
  const { firstName, lastName, username, email } = userData;

  const loadUserData = async () => {
    const user = await getUserData();
    setUserData(user as IUser);
  };

  const handleUpdateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataToUpdate: IUpdateUser = {
      firstName: data.get('firstName')?.toString() || '',
      lastName: data.get('lastName')?.toString() || ''
    };
    const updatedUser = await updateUser(dataToUpdate);
    if (!updatedUser) {
      setErrorMessage('Nieprawidłowe imię lub nazwisko');
    } else {
      navigate('/');
    }
  };

  const handleDeleteAccount = async () => {
    const res = await deleteUser();
    if (!res) {
      setErrorMessage('Nie można usunąć konta. Spróbuj ponownie później.');
    } else {
      navigate('/');
    }
  };

  const handleClickEditAccount = () => {
    setIsEditingAccount(prev => !prev);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <Container>
      <Heading variant='h1'>Twój profil</Heading>
      {
        isEditingAccount ? (
          <UserData onSubmit={handleUpdateUser}>
            <TextField
              margin="normal"
              required
              name="password"
              label="Imię"
              type="text"
              id="firstName"
              autoComplete="first-name"
            />
            <TextField
              margin="normal"
              required
              name="password"
              label="Nazwisko"
              type="text"
              id="lastName"
              autoComplete="last-name"
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </UserData>
        ) : (
          <UserData>
            <Typography variant='body2'>Imię: <span>{firstName}</span></Typography>
            <Typography variant='body2'>Nazwisko: <span>{lastName}</span></Typography>
            <Typography variant='body2'>Nick: <span>{username}</span></Typography>
            <Typography variant='body2'>Email: <span>{email}</span></Typography>
            <Box>
              {/* <DeleteAccount
                buttonText='Usuń konto'
                title='Usuń swoje konto'
                description='Czy na pewno chcesz usunąć konto? Zatwierdzając bezpowrotnie stracisz do niego dostęp.'
                actionFunction={handleDeleteAccount}
              /> */}
              <Button variant="text" color="primary" onClick={handleClickEditAccount}>
                Edytuj konto
              </Button>
            </Box>
          </UserData>
        )
      }
    </Container >
  );
};

export default Profile;
