import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ArticlePage } from '../pages/ArticlePage'
import { ArticleDetailPage } from '../pages/ArticleDetailPage'

export const ArticleRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <ArticlePage /> } />
        <Route path=':id' element={ <ArticleDetailPage /> } />
        <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}
