import { createContext } from 'react';
import { IUserContext } from './UserContext.types';

const UserContext = createContext<IUserContext>({
  userToken: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserToken: (auth: any) => {}
});

export default UserContext;