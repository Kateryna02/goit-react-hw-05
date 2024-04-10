

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../../Api';
import { Link } from 'react-router-dom';
import s from './SearchPesultPage.module.css'

const SearchResultPage = () => {
    const { searchQuery } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const searchResult = await searchMovies(searchQuery);
                setMovies(searchResult);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();

        return () => {
           
        };
    }, [searchQuery]);

    return (
        <div className={s.result}>
            <h1 className={s.resultTitle}>Result</h1>
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

export default SearchResultPage;
