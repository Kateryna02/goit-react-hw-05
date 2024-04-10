

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../Api';
import s from '../movieCast/MovieCast.module.css'
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(cast);
 useEffect(() => {
  const fetchCast = async () => {
    try {
      const credits = await fetchMovieCredits(movieId);
      if (Array.isArray(credits.cast)) {
        setCast(credits.cast);
      } else {
        console.error('Error: Expected an array of cast members, but received:', credits);
      }
    } catch (error) {
      console.error('Error fetching movie cast:', error);
    }
  };
   console.log(cast);
  if (movieId) {
    fetchCast();
  }
}, [movieId]);



  return (
    <div>
      <h2 className={s.cast}>Movie Cast</h2>
      <ul className={s.castTitle}>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>

    </div>
  );
};

export default MovieCast;


