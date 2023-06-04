import { createContext } from 'react';
import { IAuthContext } from './AuthProvider.types';

const AuthContext = createContext<IAuthContext>({
  userToken: null,
  user: null,
  setUserToken: function (auth: string) { return undefined; },
});

export default AuthContext;