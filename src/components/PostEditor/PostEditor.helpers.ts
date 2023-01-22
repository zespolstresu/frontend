import {VPost, TValidatePost} from './PostEditor.types';

export const validatePost = async (data: TValidatePost) => (
  await VPost
    .validate(data, { abortEarly: false })
    .then(value => value)
    .catch(err => err.errors)
);

export const formatDate = (newDate: Date | string) => {
  const date = typeof newDate === 'string' ? new Date(newDate) : newDate;
  const year = date.getFullYear();
  const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
  const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${year}-${month}-${day}T${hours}:${minutes}:00.000+00:00`;
};
