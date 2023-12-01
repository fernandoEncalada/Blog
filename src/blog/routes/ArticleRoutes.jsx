import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ArticlePage } from '../pages/ArticlePage'
import { ArticleDetailPage } from '../pages/ArticleDetailPage'
import { NewArticlePage } from '../pages/NewArticlePage'

export const ArticleRoutes = () => {
  return (
    <Routes>
      {/* TEST */}
        {/* <Route path='/' element={ <ArticlePage /> } />
        <Route path='/detail/:id' element={ <ArticleDetailPage /> } />
        <Route path='/*' element={ <Navigate to='/' /> } /> */}
    </Routes>
  )
}
