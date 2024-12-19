import axios from 'axios';

// Set up the News API base URL and headers
const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2', // NewsAPI base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Use environment variable for API key to improve security
const API_KEY = process.env.REACT_APP_NEWS_API_KEY || '312226b6fffb495b89d92b2e08d6e4c4'; // Replace this with your environment variable or fallback key

// Fetch top headlines
export const fetchTopHeadlines = async (country = 'us') => {
    try {
        const response = await newsApi.get(`/top-headlines?country=${country}&apiKey=${API_KEY}`);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching top headlines:', error);

        // Provide fallback behavior or return empty array
        return [];
    }
};

// Fetch news by query
export const fetchNewsByQuery = async (query) => {
    try {
        const response = await newsApi.get(`/everything?q=${query}&apiKey=${API_KEY}`);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news by query:', error);

        // Provide fallback behavior or return empty array
        return [];
    }
};
