

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../Api';
import s from './MovieReviews.module.css'
const MovieReviews = () => {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);

  return (
    <div>
      <h3 className={s.reviews}>Movie Reviews</h3>
      <ul className={s.reviewsList}>
        {reviews.map(review => (
          
          <li key={review.id}>
            <p className={s.reviewsTitle}>Author: {review.author}</p>
            <p>Content: {review.content}</p>
         
          </li>
        ))}
      </ul>

    </div>
  );
};

export default MovieReviews;







