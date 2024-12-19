import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postSignupData } from '../services/api';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await postSignupData(data);
            if (response) {
                setMessage('Signup successful!');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setMessage('Signup failed. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter your full name"
                        {...register('name', { required: 'Full Name is required' })}
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
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
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        })}
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default Signup;
