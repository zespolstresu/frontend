import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { getPosts, loadSearchedPosts } from '../../api/Post.api';
import { Post } from '../../components';
import { IPost } from '../../components/Post/Post.types';
import PostEditor from '../../components/PostEditor/PostEditor';
import { Wall, StickySidebar } from './MainPage.styles';
import { Typography } from '@mui/material';
import { GridWrapper } from '../../styles/commonStyles';
import { UserContext } from '../../context';
import { toast, ToastContainer } from 'react-toastify';
import { TextField } from '../../styles/commonStyles';
import ClearIcon from '@mui/icons-material/Clear';
import { ClearButton, Wrapper } from './components/SearchPosts/SearchPosts.styles';

const MainPage = (): JSX.Element => {
  const { userToken } = useContext(UserContext);
  const timeout = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const userPosts = useMemo(() => {
    return posts.filter(post => post.tag !== 'sponsored');
  }, [posts]);

  const sponsoredPosts = useMemo(() => {
    return posts.filter(post => post.tag === 'sponsored');
  }, [posts]);

  const loadPosts = async () => {
    const dbPosts = await getPosts() as unknown as IPost[];
    if (dbPosts && dbPosts.length > 0) {
      const sortedPosts = dbPosts.sort((a, b) => b.id - a.id);
      setPosts(sortedPosts);
    } else {
      setErrorMessage('Nie udało się pobrać postów');
    }
  };


  const handleDebouncedSearch = async () => {
    console.log(inputRef.current.value);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      loadSearchedPosts(inputRef.current.value).then(response => {
        if (!response) {
          setErrorMessage('Nie znaleziono postów zawierających podaną frazę.');
          setPosts(sponsoredPosts);
        } else {
          console.log(response);
          const postsWithoutSponsored = response.filter((el: IPost) => el.tag !== 'sponsored');
          setPosts([...postsWithoutSponsored, sponsoredPosts].sort((a, b) => b.id - a.id));
        }
      });

    }, 600);
  };

  const clearSearch = () => {
    inputRef.current.value = '';
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <GridWrapper
      container
      justifyContent={'center'}
      columnSpacing={{ md: 5, lg: 10 }}
      rowSpacing={{ xs: 4, sm: 6, md: 10 }}
    >
      <Wall item md={6}>
        <Typography variant='h2'>Twoja tablica</Typography>
        <Wrapper>
          <TextField
            id=""
            inputRef={inputRef}
            color='primary'
            label="szukaj postów"
            onChange={handleDebouncedSearch}
            fullWidth
            sx={{ maxWidth: 'unset' }}
          />
          <ClearButton onClick={clearSearch} color='primary' >
            <ClearIcon />
          </ClearButton>
        </Wrapper>
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