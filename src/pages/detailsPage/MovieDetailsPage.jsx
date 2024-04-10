




import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../../Api';
import s from './MovieDetailsPage.module.css'
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  const goBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={s.movieDetails}>
      {movie.title && (
        <><div className={s.conteiner}>
          <h2 className={s.movieTitle}>Movie Details</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className={s.moviePoster} />
        </div>
        </>
      )}

      <div className={s.conteiner}>
        <button onClick={goBack} className={s.goBackButton}>Go back</button>

        <Link to={`cast`} className={s.link}>
          <button className={s.button}>Cast</button>
        </Link>
        <Link to={`reviews`} className={s.link}>
          <button className={s.button}>Reviews</button>
        </Link>
   </div>

      <Outlet />
    </div>
    
  );
};

export default MovieDetailsPage;