import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Details = lazy(() => import('pages/details'));
const NotFound = lazy(() => import('pages/notFound'));

export enum ROUTES {
 HOME = '/',
 DETAILS = '/details/:id',
}

export const AppRoutes = () => {
 return (
  <Suspense fallback={<div>Loading...</div>}>
   <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.DETAILS} element={<Details />} />
    <Route path='*' element={<NotFound />} />
   </Routes>
  </Suspense>
 );
};
