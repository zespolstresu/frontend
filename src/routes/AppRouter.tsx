import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { UserContext } from '../context';
import { TermsOfUse } from '../pages';

const AppRouter = () => {
  const { userToken } = useContext(UserContext);
  const isUserAuthenticated = Boolean(userToken);
  return (
    <Routes>
      {
        isUserAuthenticated
          ? <Route path='/*' element={<PrivateRoutes />} />
          : <Route path='/*' element={<PublicRoutes />} />
      }
      <Route path='termsOfUse' element={<TermsOfUse />} />
    </Routes>
  );
};

export default AppRouter;