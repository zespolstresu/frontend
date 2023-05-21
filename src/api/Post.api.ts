import axios, { AxiosError, AxiosResponse } from 'axios';
import { TCreatePost, TUpdatePost } from '../components/PostEditor/PostEditor.types';

export const createPost = async (data: TCreatePost) => {
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios.post('/api/posts', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data;
  } catch (error) {
    console.log('%c create post error: ', 'color: orange', error);
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getPosts = async () => {
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios
      .get('/api/posts', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${jwt}`
        }
      });
    return res.data || [];
  } catch (error) {
    console.log(error);
  }
};

export const getOnePost = async (id: number) => {
  const res: AxiosResponse = await axios
    .get(`/api/posts/${id}`)
    .then((response) => response.data || []);
  return res;
};

export const updatePost = async (data: TUpdatePost) => {
  const { id, content } = data;
  const requestData = {
    content
  };
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios.put(`/api/posts/${id}`, JSON.stringify(requestData), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (id: number) => {
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios.delete(`/api/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const sendUserVote = async (postId: number, votes: number) => {
  // api/posts/{id}/votes/{liczba głosów}
  try {
    const data = { votes };
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios
      .put(`/api/posts/${postId}/votes/${votes}`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${jwt}`
        }
      });
    return res.data || null;
  } catch (error) {
    console.error(error);
  }
};


export const loadSearchedPosts = async (searchValue: string) => {
  try {
    const jwt = localStorage.getItem('user');
    const res: AxiosResponse = await axios
      .get(`/api/posts/search?value=${searchValue}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${jwt}`
        }
      });
    return res.data || null;
  } catch (error) {
    console.error(error);
  }
};