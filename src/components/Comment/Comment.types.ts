import { IPost } from '../Post/Post.types';

export interface IComment extends Pick<IPost, 'username' | 'content'> {
  id?: number;
  postId?: number;
}
