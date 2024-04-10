
import React from 'react';
import { useNavigate } from 'react-router-dom';


const MovieList = ({ movies }) => {
  const navigate = useNavigate(); 

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`); 
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} onClick={() => handleMovieClick(movie.id)}> 
        
        </div>
      ))}
    </div>
  );
};

export default MovieList;







