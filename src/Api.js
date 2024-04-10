



import axios from 'axios';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTM2YmE3OTJmMDg1NTk1ZTI5YTdiYWE4MTllY2M1MiIsInN1YiI6IjY2MTNlMzdlOGVlMGE5MDE2NWEzZDA0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yn1nlGdeBNNoBiV7_pu1Ztw7rulfK7c4_7_Lqn1Sduk';

const BASE_URL = `https://api.themoviedb.org/3`;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: API_KEY
    }
});
export { api };
    
export const fetchMovieReviews = async (movieId) => {
    try {
        const url = `/movie/${movieId }/reviews`;
        const response = await api.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movie reviews:', error);
        throw new Error('Error fetching movie reviews:', error);
    }
};

export const fetchTrendingMovies = async () => {
    try {
        const url = `/trending/movie/week`;
        const response = await api.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        throw error;
    }
};


export const searchMovies = async (searchQuery) => {
    try {
        const response = await api.get(`/search/movie?query=${searchQuery}`);
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw new Error('Error searching movies:', error);
    }
};


export const fetchMovieDetails = async (movieId) => {
    try {
        const url = `/movie/${movieId}`;
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};

export const fetchMovieCredits = async (movieId) => {
    if (!movieId) {
        throw new Error('Movie ID is not provided');
    }

    try {
        const url = `/movie/${movieId}/credits`;
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie credits:', error);
        throw error;
    }
};
