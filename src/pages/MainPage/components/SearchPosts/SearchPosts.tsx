import React, { useRef, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { ClearButton, Wrapper } from './SearchPosts.styles';
import { IPost } from '../../../../components/Post/Post.types';
import { loadSearchedPosts } from '../../../../api/Post.api';
import { InputAdornment } from '@mui/material';
import { TextField } from '../../../../styles/commonStyles';

const SearchPosts = (): JSX.Element => {
  const timeout = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleDebouncedSearch = async () => {
    console.log(inputRef.current.value);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      console.log('szukaj');
      loadSearchedPosts(inputRef.current.value).then(response => {
        if (!response) {
          console.error('error');
          setPosts([]);
        } else {
          setPosts(response);
        }
      });

    }, 600);
  };

  const clearSearch = () => {
    inputRef.current.value = '';
  };

  return (
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
  );
};

export default SearchPosts;