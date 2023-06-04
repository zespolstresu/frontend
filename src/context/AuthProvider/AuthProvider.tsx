import AuthContext from './AuthProvider.context';
import React, { useEffect, useState } from 'react';
import { IAuthProvider } from './AuthProvider.types';
import { getUserData as getUserDataQuery } from '../../api/User.api';
import { IUser } from '../../types';

const AuthProvider = ({ children }: IAuthProvider) => {
  const [userToken, setUserToken] = useState(localStorage.getItem('user'));
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserData();
  }, [userToken]);
  

  const getUserData = async () => {
    const user = await getUserDataQuery();
    if(!user) setUser(null);
    setUser(user as IUser);
  };
  
  return (
    <AuthContext.Provider value={{ userToken, setUserToken, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;