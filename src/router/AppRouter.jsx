import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../hooks/useAuthStore';
import { NewArticlePage } from '../blog/pages/NewArticlePage';
import { LoginPage } from '../auth/pages/LoginPage';
import { ArticlePage } from '../blog/pages/ArticlePage';
import { ArticleDetailPage } from '../blog/pages/ArticleDetailPage';

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if (status === 'checking') {
    return (
      <h3>Loading...</h3>
    )
  }

  return (
    <Routes>
      {
        (status === 'authenticated')
          ? <Route path='/create' element={<NewArticlePage />} />
          : <Route path='/auth/login' element={<LoginPage />} />
      }

      <Route path='/' element={<ArticlePage />} />
      <Route path='/:id' element={<ArticleDetailPage />} />
      <Route path='/create' element={<Navigate to='/auth/login' />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
}
