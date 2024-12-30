import axios from 'axios';

// Set up the News API base URL and headers
const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2', // NewsAPI base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Use environment variable for API key to improve security
const API_KEY = process.env.REACT_APP_NEWS_API_KEY || '312226b6fffb495b89d92b2e08d6e4c4'; // Fallback key

// Check if the API key is available
const checkApiKey = () => {
    if (!API_KEY) {
        console.error('Error: News API key is missing!');
        throw new Error('Missing API key');
    } else {
        console.log('News API key is available:', API_KEY);
    }
};

// Fetch top headlines
export const fetchTopHeadlines = async (country = 'us') => {
    try {
        checkApiKey();  // Check API key before making requests
        const endpoint = `/top-headlines?country=${country}&apiKey=${API_KEY}`;
        const response = await newsApi.get(endpoint);

        // Check if the response contains articles
        if (response.data && response.data.articles) {
            return response.data.articles;
        }

        // Log a warning if articles are missing
        console.warn('No articles found in the response for top headlines');
        return [];
    } catch (error) {
        console.error('Error fetching top headlines:', error);

        // Provide fallback behavior or return empty array
        return [];
    }
};

// Fetch news by query
export const fetchNewsByQuery = async (query) => {
    try {
        checkApiKey();  // Check API key before making requests
        const endpoint = `/everything?q=${query}&apiKey=${API_KEY}`;
        const response = await newsApi.get(endpoint);

        // Check if the response contains articles
        if (response.data && response.data.articles) {
            return response.data.articles;
        }

        // Log a warning if articles are missing
        console.warn('No articles found in the response for query:', query);
        return [];
    } catch (error) {
        console.error('Error fetching news by query:', error);

        // Provide fallback behavior or return empty array
        return [];
    }
};

// Validate API key (throw error if not found)
export const validateApiKey = () => {
    checkApiKey();
};
