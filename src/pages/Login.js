import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchAllUsers } from '../services/api'; // Import the API function to fetch all users

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');

    const onSubmit = async (data) => {
        try {
            // Fetch all users from the Faux API
            const users = await fetchAllUsers();

            // Validate the entered credentials
            const user = users.find(user =>
                user.email === data.email && user.details.password === data.password
            );

            if (user) {
                setMessage(`Welcome back, ${user.username}!`);
            } else {
                setMessage('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage('An error occurred while logging in. Please try again later.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default Login;
