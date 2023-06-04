import { getUserData as getUserDataQuery } from '../../api/User.api';
import AuthContext from './AuthProvider.context';
import {useContext} from 'react';

const useAuthContext = ()  => {
  const ctx = useContext(AuthContext);
  console.log(ctx);

  if (ctx === undefined) {
    throw new Error('AuthContext must be used within a AuthProvider');
  }

  return {
    ...ctx
  };
};

export default useAuthContext;
