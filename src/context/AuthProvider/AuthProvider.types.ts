import { IUser } from '../../types';

export interface IAuthContext {
  userToken: string | null;
  setUserToken: (auth: string) => void;
  user: IUser | null;
}

export interface IAuthProvider {
  children: React.ReactNode
}