import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, MainPagePreview, NotFound, Register } from '../pages';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPagePreview />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;