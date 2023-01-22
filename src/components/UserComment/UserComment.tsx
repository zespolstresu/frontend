import React, { ChangeEvent, useState } from 'react';
import { Button, PublishIcon, Textarea, Wrapper } from '../../styles/commonStyles';
import { createComment } from '../../api/Comment.api';
import { IPostData } from './UserComment.types';
import { ErrorMessage } from '../../pages/Register/Register.styles';

const UserComment = ({ postId }: IPostData): JSX.Element => {
  const [comment, setComment] = useState('');
  const [swearWordsError, setSwearWordsError] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const response = await createComment({ postId, content: comment });
    if (response.includes('niezgodne')) {
      setSwearWordsError(response);
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} id='commentForm'>
      <Wrapper>
        <Textarea value={comment} onChange={handleInputChange} />
        <Button
          form='commentForm'
          type='submit'
          variant='text'
          color='primary'
          endIcon={<PublishIcon />}>
          Dodaj
        </Button>
        <ErrorMessage>{swearWordsError}</ErrorMessage>
      </Wrapper>
    </form>
  );
};

export default UserComment;