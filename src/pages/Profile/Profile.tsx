import React, { useState, useEffect } from 'react';
import { Heading } from '../../styles/commonStyles';
import { UserData, Container } from './Profile.styles';
import { getUserData } from '../../api/User.api';
import { Typography } from '@mui/material';
import { IUser } from './Profile.types';

const Profile = (): JSX.Element => {
  const [userData, setUserData] = useState<IUser>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });
  const { firstName, lastName, username, email, password } = userData;

  const loadUserData = async () => {
    const user = await getUserData();
    setUserData(user as IUser);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <Container>
      <Heading variant='h1'>Twój profil</Heading>
      <UserData>
        <Typography variant='body2' style={{ fontSize: 30 }}>imię: <span style={{ color: 'gold', fontSize: 25 }}>{firstName}</span></Typography>
        <Typography variant='body2' style={{ fontSize: 30 }}>nazwisko: <span style={{ color: 'gold', fontSize: 25 }}>{lastName}</span></Typography>
        <Typography variant='body2' style={{ fontSize: 30 }}>nick: <span style={{ color: 'gold', fontSize: 25 }}>{username}</span></Typography>
        <Typography variant='body2' style={{ fontSize: 30 }}>email: <span style={{ color: 'gold', fontSize: 25 }}>{email}</span></Typography>
      </UserData>

    </Container>
  );
};

export default Profile;