

import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../Api';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const query = searchParams.get('query');
        console.log('Search query:', query);
        if (query) {
          const searchResult = await searchMovies(query);
          setMovies(searchResult);
        } else {
          setMovies([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
     
    };
  }, [searchParams]);

  const handleSubmit = async (values) => {
    const query = values.search.trim();
    if (query) {
      try {
        setLoading(true);
        const searchResult = await searchMovies(query);
        setMovies(searchResult);
        setError(null);
        navigate(`?query=${query}`); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={s.result}>
      <h1 className={s.resultTitle}>Result</h1>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field name="search" placeholder="Search..." className={s.input} />
          <button type="submit" className={s.btn}>Search</button>
        </Form>
      </Formik>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={s.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;


