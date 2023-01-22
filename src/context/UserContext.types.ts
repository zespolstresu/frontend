export interface IUserContext {
    userToken: string | null;
    setUserToken: (auth: any) => void;
}