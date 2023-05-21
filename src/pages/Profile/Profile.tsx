import React, { useState, useEffect } from 'react';
import { Heading, TextField } from '../../styles/commonStyles';
import { UserData, Container, ButtonsWrapper, AccountIcon } from './Profile.styles';
import { getUserData, deleteUser, updateUser } from '../../api/User.api';
import { Typography, Button } from '@mui/material';
import { IUser } from './Profile.types';
import { useNavigate } from 'react-router-dom';
import { Modal as DeleteAccount } from '../../components';
import { IUpdateUser } from '../../types';
import { ErrorMessage } from '../Register/Register.styles';
import { initialState } from './Profile.constants';

const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState<IUser>(initialState);
  const { firstName, lastName, username, email } = userData;
  const [firstNameEdit, setFirstNameEdit] = useState('');
  const [lastNameEdit, setLastNameEdit] = useState('');

  const loadUserData = async () => {
    const user = await getUserData();
    setUserData(user as IUser);
    setFirstNameEdit(user?.firstName);
    setLastNameEdit(user?.lastName);
  };

  const handleUpdateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToUpdate: IUpdateUser = {
      firstName: firstNameEdit,
      lastName: lastNameEdit
    };
    const updatedUser = await updateUser(dataToUpdate);
    if (!updatedUser) {
      setErrorMessage('Nieprawidłowe imię lub nazwisko');
    } else {
      setIsEditingAccount(false);
      document.location.reload();
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

  const handleCancelEditAccount = () => {
    setIsEditingAccount(false);
  };

  const handleClickEditAccount = () => {
    setIsEditingAccount(prev => !prev);
  };

  useEffect(() => {
    loadUserData();
  }, []);


  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameEdit(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameEdit(event.target.value);
  };

  return (
    <Container>
      <AccountIcon color='secondary' />
      <Heading variant='h1'>Twój profil</Heading>
      {
        isEditingAccount ? (
          <UserData onSubmit={handleUpdateUser}>
            <TextField
              margin="normal"
              required
              name="firstName"
              onChange={handleFirstNameChange}
              value={firstNameEdit}
              label="Imię"
              type="text"
              id="firstName"
              autoComplete="first-name"
            />
            <TextField
              margin="normal"
              required
              name="lastName"
              onChange={handleLastNameChange}
              label="Nazwisko"
              value={lastNameEdit}
              type="text"
              id="lastName"
              autoComplete="last-name"
            />
            <Button variant="contained" color="secondary" type='submit' sx={{ width: '160px' }}>
              Zatwierdź
            </Button>
            <Button variant="text" color="primary" sx={{ width: '160px' }} onClick={handleCancelEditAccount}>
              Anuluj
            </Button>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </UserData>
        ) : (
          <UserData>
            <Typography variant='body2'>Imię: <span>{firstName}</span></Typography>
            <Typography variant='body2'>Nazwisko: <span>{lastName}</span></Typography>
            <Typography variant='body2'>Nick: <span>{username}</span></Typography>
            <Typography variant='body2'>Email: <span>{email}</span></Typography>
            <ButtonsWrapper>
              <Button variant="contained" color="primary" onClick={handleClickEditAccount}>
                Edytuj konto
              </Button>
              <DeleteAccount
                buttonText='Usuń konto'
                title='Usuń swoje konto'
                description='Czy na pewno chcesz usunąć konto? Zatwierdzając bezpowrotnie stracisz do niego dostęp. Aby anulować, kliknij gdziekolwiek poza modalem.'
                actionFunction={handleDeleteAccount}
              />
            </ButtonsWrapper>
          </UserData>
        )
      }
    </Container >
  );
};

export default Profile;
