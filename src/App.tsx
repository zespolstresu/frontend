import React from 'react';
import { AppWrapper, ContentWrapper } from './App.styles';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/system';
import spotUSTheme from './theme/theme';
import { AppRouter } from './routes';
import { AuthProvider } from './context';

const App = () => (
  <ThemeProvider theme={spotUSTheme}>
    <AuthProvider>
      <AppWrapper>
        <Navbar />
        <ContentWrapper>
          <AppRouter />
        </ContentWrapper>
      </AppWrapper>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
