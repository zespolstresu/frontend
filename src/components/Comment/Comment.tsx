import { Box, IconButton, Typography } from '@mui/material';
import React, {  useMemo } from 'react';
import { Container } from './Comment.styles';
import { IComment } from './Comment.types';
import { decodeUserToken } from '../../utils';
import { DeleteIcon, UserActions } from '../Post/Post.styles';
import { deleteComment } from '../../api/Comment.api';
import CommentModal from '../Modal/CommentModal';
import { useAuthContext } from '../../context';

const Comment = (props: IComment): JSX.Element => {
  const { username, content, id } = props;
  const { userToken } = useAuthContext();
  const decodedUsername = useMemo(() => {
    const username = userToken ? decodeUserToken(userToken) : '';
    if (username) {
      return username.sub;
    }
    return '';
  }, [userToken]);

  const handleCommentDelete = async () => {
    await deleteComment(id);
    document.location.reload();
  };

  return (
    <Container>
      <Typography variant='body1'>{username}</Typography>
      <Typography variant='body1' sx={(theme) => ({ margin: theme.spacing(1,0)})}>{content}</Typography>
      <UserActions>
        {decodedUsername === username && (
          <Box sx={(theme) => ({ display: 'flex', gap: theme.spacing(1)})}>
            <IconButton
              type='submit'
              onClick={handleCommentDelete}
              color='third'>
              <DeleteIcon />
            </IconButton>
            <CommentModal title='Edytuj Komentarz' data={content} postId={id} />
          </Box>
        )}
      </UserActions>
    </Container>
  );
};

export default Comment;