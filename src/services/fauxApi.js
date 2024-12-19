const BASE_URL = 'https://faux-api.com/api/v1';
const API_NAME = 'news_tokenNo'; // Replace with your API name and token

// 1. GET all data
export const fetchAllNews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${API_NAME}`);
        if (!response.ok) throw new Error('Failed to fetch all news');
        return await response.json();
    } catch (error) {
        console.error('Error fetching all news:', error);
        throw error;
    }
};

// 2. GET data by ID
export const fetchNewsById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${API_NAME}/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch news with ID: ${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching news by ID (${id}):`, error);
        throw error;
    }
};

// 3. GET data with filter
export const fetchNewsByFilter = async (key, value) => {
    try {
        const response = await fetch(`${BASE_URL}/${API_NAME}/{"${key}":"${value}"}`);
        if (!response.ok) throw new Error('Failed to fetch filtered news');
        return await response.json();
    } catch (error) {
        console.error(`Error fetching news by filter (${key}:${value}):`, error);
        throw error;
    }
};

// 4. POST (Add new data)
export const addNews = async (newsData) => {
    try {
        const response = await fetch(`${BASE_URL}/${API_NAME}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newsData),
        });
        if (!response.ok) throw new Error('Failed to add news');
        return await response.json();
    } catch (error) {
        console.error('Error adding news:', error);
        throw error;
    }
};

// 5. DELETE (Remove data by ID)
export const deleteNewsById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${API_NAME}/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error(`Failed to delete news with ID: ${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error deleting news by ID (${id}):`, error);
        throw error;
    }
};
