import axiosInstance from './axiosInstance';
import Cookies from 'js-cookie';

// Login user and store JWT token in cookies
export const loginUser = async (email, password) => {
    const response = await axiosInstance.post('users/login', { email, password });
    if (response.data.token) {
        Cookies.set('token', response.data.token, { expires: 7 }); // Store token in cookies
    }
    return response.data;
};

// Register user
export const registerUser = async (name, email, role, password) => {
    const response = await axiosInstance.post('users/register', { name, email, role, password });
    if (response.data.token) {
        Cookies.set('token', response.data.token, { expires: 7 }); // Store token in cookies
    }
    return response.data;
};

// Logout user
export const logoutUser = () => {
    Cookies.remove('token'); // Remove token from cookies
};

// Check if the user is authenticated by checking the presence of a token
export const isAuthenticated = () => {
    return Cookies.get('token'); // Returns the token if present, otherwise undefined
};
