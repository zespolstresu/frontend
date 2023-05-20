import axios, { AxiosError, AxiosResponse } from 'axios';
import { ILoginUser, IUpdateUser, IUser } from '../types';

export const createUser = async (data: IUser) => {
  try {
    const res: AxiosResponse = await axios
      .post('/api/auth/register', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    return res.data;
  } catch (error) {
    console.log('%c register error: ', 'color: orange', error);
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const loginUser = async (data: ILoginUser) => {
  try {
    const res: AxiosResponse = await axios
      .post('/api/auth/authenticate', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    return res.data;
  } catch (error) {
    console.log('%c register error: ', 'color: orange', error);
    if (error instanceof AxiosError) {
      return null;
    }
  }
};

export const getUserData = async () => {
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios.get('/api/user', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteUser = async () => {
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios.delete('/api/user', {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateUser = async (data: IUpdateUser) => {
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios.put('/api/user', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
