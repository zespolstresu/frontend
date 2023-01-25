import React from 'react';
import { Post } from '../../components';
import { IPost } from '../../components/Post/Post.types';
import { Wall, StickySidebar, Slogan } from './MainPage.styles';
import mockPostsJSON from '../../mocks/Post.mocks.json';
import Announcement from '../../components/Announcement/Announcement';
import { registerAd } from '../../mocks/Annoucement.mocks';
import { GridWrapper, InfoText } from '../../styles/commonStyles';

const previewPosts = mockPostsJSON as IPost[];

const MainPagePreview = (): JSX.Element => {
  console.log('%c You are on Main Page preview for unauthenticated visitor', 'color: #47bbff');

  return (
    <GridWrapper
      container
      justifyContent={'center'}
      columnSpacing={{ md: 5, lg: 10 }}
      rowSpacing={{ xs: 4, sm: 6, md: 10 }}
    >
      <Wall item md={6} >
        <Slogan variant='h2'>Bądź na bieżąco ze studentami</Slogan>
        <InfoText variant="body1">
          Na twojej tablicy będą pojawiać się ogłoszenia innych studentów. Możesz je oceniać i komentować, a także dodać własne!
        </InfoText>
        {
          previewPosts.map(post => (
            <Post key={post.id} {...post} previewVersion />
          ))
        }
      </Wall>
      <StickySidebar item md={6} lg={5}>
        <Announcement
          author='SpotUS'
          buttonText='Załóż konto'
          link='/register'
          content={registerAd}
          title='Dołącz do nas!' />
      </StickySidebar>
    </GridWrapper>
  );
};

export default MainPagePreview;