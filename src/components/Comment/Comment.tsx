import { Typography } from '@mui/material';
import React from 'react';
import { Container } from './Comment.styles';
import { IComment } from './Comment.types';

const Comment = ({username, content}: IComment): JSX.Element => (
  <Container>
    <Typography variant='body1'>{username}</Typography>
    <Typography variant='body1'>{content}</Typography>
  </Container>
);

export default Comment;