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
  CancelIcon,
  UpperWrapper,
  Username,
  AddComment
} from './Post.styles';
import { IComment } from '../Comment/Comment.types';
import mockCommentsJson from '../../mocks/Comment.mocks.json';
import { getComments } from '../../api/Comment.api';
import UserComment from '../UserComment/UserComment';
import { dateFormat } from '../../formatters';
import Comment from '../Comment/Comment';
import { IconButton, Typography } from '@mui/material';
import { UserContext } from '../../context';
import { deletePost, sendUserVote } from '../../api/Post.api';
import { decodeUserToken } from '../../utils';

const Post = (props: IPost): JSX.Element => {
  const { id, tag, username, content, commentsCount, publishDate, votes, previewVersion } = props;
  const { userToken } = useContext(UserContext);
  const [comments, setComments] = useState<IComment[]>([]);
  const [userVote, setUserVote] = useState<TVote>(0);
  const [showComments, setShowComments] = useState(false);
  const [totalVotes, setTotalVotes] = useState(votes || 0);

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
    updateVotes();
  }, [userVote]);

  useEffect(() => {
    if (userToken && tag !== 'sponsored') {
      loadComments();
    }
  }, [commentsCount]);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  const updateVotes = async() => {
    const updatedVotes = await sendUserVote(id, (votes || 0) + userVote);
    if(updatedVotes){
      setTotalVotes(updatedVotes);
    }
  };


  const loadComments = async () => {
    if (userToken) {
      const deliveredComments = await getComments(id) as unknown as IComment[];
      if (deliveredComments && deliveredComments.length > 0) {
        setComments(deliveredComments);
      }
    }
  };

  const handleVote = (vote: TVote) => () => {
    console.log(vote);
    console.log(userVote);
    setUserVote(vote);
  };

  const handleShowComments = () => {
    if (tag !== 'sponsored') {
      setShowComments(prev => !prev);
    }
  };

  const handlePostDelete = async (event: any) => {
    await deletePost(id);
  };

  // const handleCancelVote = async (event: any) => {
  //   event.preventDefault();
  //   handleVote(0);
  // };

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
              <form onSubmit={handlePostDelete} id={`deletePost${id}`}>
                <IconButton
                  type='submit'
                  form={`deletePost${id}`}
                  color='third'>
                  <DeleteIcon />
                </IconButton>
              </form>
            )}
            {/* {userVote !== 0 && (
              <form onSubmit={handleVote(0)} id={`cancelVote${id}`}>
                <IconButton
                  type='submit'
                  form={`cancelVote${id}`}
                  color='third'>
                  <CancelIcon />
                </IconButton>
              </form>
            )} */}
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
                    comments.map(({ username, content, postId }, index) => (
                      <Comment key={index} username={username} content={content} />
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