import axios, {AxiosError, AxiosResponse} from 'axios';
import { IUserComment } from '../components';

export const createComment = async (data: IUserComment) => {
  try {
    const { postId, content } = data;
    const contentToSend = {
      content,
    }
    const jwt = localStorage.getItem('user');
    const res = await axios.post(`/api/comments/${postId}`, JSON.stringify(contentToSend), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data;
  } catch(error) {
    console.log('%c create comment error: ', 'color: orange', error);
    if(error instanceof  AxiosError){
      return error.response?.data;
    }
  }
};

export const getComments = async (postId: number) => {
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios.get(`/api/comments/byPostId/${postId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data || [];
  } catch(error){
    console.error(error);
  }
};

export const getOneComment = async (id: number) => {
  const res: AxiosResponse = await axios
    .get(`/api/comments/${id}`)
    .then((response) => response.data || []);
  return res;
};

export const updateComment = async (data: unknown, id: number) => {
  const res = await axios
    .put(`/api/comments/${id}`, data)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};

export const deleteComment = async (id: number) => {
  const res = await axios
    .delete(`/api/comments/${id}`)
    .then(res => res.data)
    .catch(err => console.error(err));
  return res;
};