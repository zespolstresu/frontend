export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export type ILoginUser = Pick<IUser, 'username' | 'password'>;

export type IUpdateUser = Pick<IUser, 'firstName' | 'lastName'>