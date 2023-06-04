import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { TermsOfUse } from '../pages';
import { useAuthContext } from '../context';

const AppRouter = () => {
  const { userToken } = useAuthContext();
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