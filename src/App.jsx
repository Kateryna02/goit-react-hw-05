



import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import { ToastContainer } from 'react-toastify'
import Navigation from './components/navigation/Navigation';

const MoviesPage = lazy(() => import('./pages/moviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/detailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/movieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/reviews/MovieReviews'));
const SearchResultPage = lazy(() => import('./pages/result/SearchResultPage'));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/search/:searchQuery" element={<SearchResultPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />

    </div>
  );
};

export default App;



