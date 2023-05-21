import React, { useContext, useEffect, useMemo, useState } from 'react';
import { IPost, TVote } from './Post.types';
import {
  UserActions,
  DeleteIcon,
  PostContainer,
  UserInfo,
  WrapperLeft,
  WrapperRight,
  CommentIcon,
  Comments,
  ArrowDown,
  ArrowUp,
  Votes,
  Wrapper,
  CommentsContainer,
  UpperWrapper,
  Username,
  AddComment,
  CancelIcon
} from './Post.styles';
import { IComment } from '../Comment/Comment.types';
import mockCommentsJson from '../../mocks/Comment.mocks.json';
import { getComments } from '../../api/Comment.api';
import UserComment from '../UserComment/UserComment';
import { dateFormat } from '../../formatters';
import Comment from '../Comment/Comment';
import { Box, IconButton, Typography } from '@mui/material';
import { UserContext } from '../../context';
import { deletePost, sendUserVote } from '../../api/Post.api';
import { decodeUserToken } from '../../utils';
import { TextModal } from '../Modal';

const Post = (props: IPost): JSX.Element => {
  const { id, tag, username, content, commentsCount, publishDate, votes, previewVersion } = props;
  const { userToken } = useContext(UserContext);
  const [comments, setComments] = useState<IComment[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [totalVotes, setTotalVotes] = useState(votes || 0);
  const [isEditingPost, setIsEditingPost] = useState(false);

  const userVote = totalVotes - (votes || 0);

  const date = useMemo(() => (
    dateFormat(publishDate)
  ), [publishDate]);

  const decodedUsername = useMemo(() => {
    const username = userToken ? decodeUserToken(userToken) : '';
    if (username) {
      return username.sub;
    }
    return '';
  }, [userToken]);

  useEffect(() => {
    if(userToken){
      updateVotes();
    }
  }, [totalVotes]);

  useEffect(() => {
    loadComments();
  }, [commentsCount, showComments]);

  const updateVotes = async () => {
    const updatedVotes = await sendUserVote(id, totalVotes);
    if (updatedVotes && typeof updatedVotes === 'number') {
      setTotalVotes(updatedVotes);
    }
  };

  const loadComments = async () => {
    if (userToken && showComments) {
      const deliveredComments: IComment[] = await getComments(id);
      if (deliveredComments && deliveredComments.length > 0) {
        setComments(deliveredComments);
      }
    }
  };

  const handleShowComments = () => {
    if (tag !== 'sponsored') {
      setShowComments(prev => !prev);
    }
  };

  const handlePostDelete = async () => {
    await deletePost(id);
  };

  const handlePostEdit = () => {
    // setIsEditingPost(true);
  };

  const handleVote = (vote: TVote) => () => {
    setTotalVotes((votes || 0) + vote);
  };

  const handleCancelVote = () => {
    setTotalVotes(votes || 0);
  };

  return (
    <Wrapper>
      <PostContainer container category={tag}>
        <WrapperLeft item xs={9}>
          <UpperWrapper>
            <UserInfo>
              <Typography variant='h4'>@{tag}</Typography>
              <Username variant='h3'>{username}</Username>
            </UserInfo>
            <Typography>{content}</Typography>
          </UpperWrapper>
          {tag !== 'sponsored' && (
            <Comments>
              <IconButton onClick={handleShowComments}>
                <CommentIcon />
              </IconButton>
              <Typography>{commentsCount}</Typography>
            </Comments>)
          }
        </WrapperLeft>
        <WrapperRight item xs={2}>
          <Typography>{date}</Typography>
          <Votes>
            <IconButton
              onClick={handleVote(1)}
              disabled={userVote === 1}
              color='third'
              size='small'
              aria-label='lubię to'>
              <ArrowUp />
            </IconButton>
            <Typography variant='body2'>{totalVotes}</Typography>
            <IconButton
              onClick={handleVote(-1)}
              disabled={userVote === -1}
              color='third'
              size='small'
              aria-label='nie podoba mi się'>
              <ArrowDown />
            </IconButton>
          </Votes>
          <UserActions>
            {decodedUsername === username && (
              <Box>
                <IconButton
                  type='submit'
                  onClick={handlePostDelete}
                  color='third'>
                  <DeleteIcon />
                </IconButton>
                {/* edycja posta */}
                <TextModal  title='Edytuj ogłoszenie' data={content} postId={id} />
              </Box>
            )}
            {userVote !== 0 && (
              <IconButton
                onClick={handleCancelVote}
                type='submit'
                color='third'>
                <CancelIcon />
              </IconButton>
            )}
          </UserActions>
        </WrapperRight>
      </PostContainer>
      {showComments && (
        <CommentsContainer>
          {
            previewVersion
              ? (
                mockCommentsJson.map(({ username, content, postId }, index) => postId === id && (
                  <Comment key={index} username={username} content={content} />
                ))
              )
              : (
                <>
                  <AddComment variant="h4">Dodaj komentarz</AddComment>
                  <UserComment postId={id} />
                  {
                    comments.map(({ username, content, postId }) => (
                      <Comment key={postId} username={username} content={content} />
                    ))
                  }
                </>
              )
          }
        </CommentsContainer>
      )}
    </Wrapper>
  );
};

export default Post;