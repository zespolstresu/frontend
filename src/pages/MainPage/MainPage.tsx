import React, { useContext, useEffect, useMemo, useState } from 'react';
import { getPosts } from '../../api/Post.api';
import { Post } from '../../components';
import { IPost } from '../../components/Post/Post.types';
import PostEditor from '../../components/PostEditor/PostEditor';
import { Wall, StickySidebar } from './MainPage.styles';
import { Typography } from '@mui/material';
import { GridWrapper } from '../../styles/commonStyles';
import { UserContext } from '../../context';
import { toast, ToastContainer } from 'react-toastify';

const MainPage = (): JSX.Element => {
  const { userToken } = useContext(UserContext);
  const [posts, setPosts] = useState<IPost[]>([]);

  const userPosts = useMemo(() => {
    return posts.filter(post => post.tag !== 'sponsored');
  }, [posts]);

  const sponsoredPosts = useMemo(() => {
    return posts.filter(post => post.tag === 'sponsored');
  }, [posts]);

  console.log('%c You are on Main Page for verified user', 'color: #47bbff');
  console.log('posts from database: ', posts);
  console.log('user data on Main Page: ', userToken);

  const loadPosts = async () => {
    const dbPosts = await getPosts() as unknown as IPost[];
    console.log('dbPosts: ', dbPosts);
    if (dbPosts && dbPosts.length > 0) {
      setPosts(dbPosts);
    } else {
      console.error('Nie udało się pobrać postów');
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <GridWrapper
      container
      justifyContent={'center'}
      columnSpacing={{ md: 5, lg: 10}}
      rowSpacing={{ xs: 4, sm: 6, md: 10 }}
    >
      <Wall item md={6}>
        <Typography variant='h2'>Twoja tablica</Typography>
        <PostEditor />
        {
          userPosts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }
      </Wall>
      <StickySidebar item md={6} lg={5}>
        <Typography variant='h2'>Zobacz, co cię ominęło w tym tygodniu!</Typography>
        {
          sponsoredPosts.map(post => (
            <Post key={post.id} {...post} />
          ))
        }
        {
          !sponsoredPosts.length && (
            <Typography variant='h4' color='text.light'>Nie znaleziono dostępnych postów</Typography>
          )
        }
      </StickySidebar>
    </GridWrapper>
  );
};

export default MainPage;