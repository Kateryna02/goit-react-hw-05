

import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const NotFoundPage = () => {
  useEffect(() => {
    toast.error('Сталася помилка. Сторінку не знайдено!');
  }, []);

  return <div>
    <p>Page not found. Please go back to the <Link to="/">homepage</Link>.</p>
  </div>;
};

export default NotFoundPage;