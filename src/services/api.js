const BASE_URL = 'https://faux-api.com/api/v1/006292322716721976';

// Fetch all users
export const fetchAllUsers = async () => {
    const endpoint = `${BASE_URL}/users`;
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error fetching users: ${response.status}`);
    }

    return response.json();
};

// Validate login
export const validateLogin = async (email, password) => {
    const users = await fetchAllUsers();
    const user = users.find(u => u.email === email && u.details.password === password);

    if (user) {
        return user;
    } else {
        throw new Error('Invalid email or password');
    }
};

// Post signup data
export const postSignupData = async (userData) => {
    const endpoint = `${BASE_URL}/users`;
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error(`Error signing up user: ${response.status}`);
    }

    return response.json(); // Return the response data
};
