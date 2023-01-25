import * as yup from 'yup';
import { IPost } from '../Post/Post.types';

export const VPost = yup.object().shape({
  tag: yup.string().required('Wybierz tag!'),
  content: yup
    .string()
    .test(
      'empty-check', 
      'Twój post musi zawierać treść!', 
      text => text?.replaceAll(' ','').length !== 0)
});

export type TCreatePost = Pick<IPost, 'tag' | 'content' | 'publishDate' | 'votes' >;
export type TValidatePost = Pick<IPost, 'tag' | 'content'>;
export type TUpdatePost = Pick<IPost, 'tag' | 'content' | 'votes' | 'id'>;
export type TDeletePost = Pick<IPost, 'id'>;
