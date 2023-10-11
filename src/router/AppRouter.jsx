import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../blog/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={ <AuthRoutes /> } />
        <Route path='/*' element={ <JournalRoutes /> } />
        {/* <Route path='/*' element={ <AuthRoutes /> } /> */}
    </Routes>
  );
}
