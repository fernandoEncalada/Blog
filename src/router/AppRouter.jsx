import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ArticleRoutes } from '../blog/routes/ArticleRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={ <AuthRoutes /> } />
        <Route path='/*' element={ <ArticleRoutes /> } />
    </Routes>
  );
}
