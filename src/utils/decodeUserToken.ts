import jwtDecode from 'jwt-decode';

export const decodeUserToken = (token: string) => {
  try {
    return jwtDecode<string>(token);
  }
  catch (error) {
    console.log('%c the value passed to decoder is not a jwt!', 'color: orange');
    return null;
  }
};