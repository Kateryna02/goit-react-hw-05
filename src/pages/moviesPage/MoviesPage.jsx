


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
// import { s } from 'vite/dist/node/types.d-aGj9QkWt';
import s from './MoviesPage.module.css'
const MoviePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setSearchQuery(values.search);
    navigate(`/movies/search/${values.search}`); 
  };

  return (
    <div className={s.formContainer}>
      <h1 className={s.formTitle}>Movies Page</h1>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field name="search" placeholder="Search..." className={s.input} />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>
     
    </div>
  );
};

export default MoviePage;
