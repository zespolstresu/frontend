import React, { useState } from 'react';
import { AppWrapper, ContentWrapper } from './App.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import spotUSTheme from './theme/theme';
import { AppRouter } from './routes';
import { UserContext } from './context';

const App = () => {
  const [userToken, setUserToken] = useState(localStorage.getItem('user'));

  return (
    <ThemeProvider theme={spotUSTheme}>
      <UserContext.Provider value={{ userToken, setUserToken }}>
        <AppWrapper>
          <Navbar />
          <ContentWrapper>
            <AppRouter />
          </ContentWrapper>
        </AppWrapper>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
