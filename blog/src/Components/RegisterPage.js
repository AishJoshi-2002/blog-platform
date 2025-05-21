import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/Auth.css';

const SignupPage = () => {

  const { setIsLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'user', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData.name, formData.email, formData.role, formData.password);
      if (response.token) {
        setIsLoggedIn(true);
        navigate('/');
      }
    } catch (error) {
      setError('Registration failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-page-container">
      <div className="auth-form-container">
        <h2>Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <input type="email" name="email" value={formData.email.toLowerCase()} onChange={handleChange} placeholder="Email" required />
          <input type="password" name="password" value={formData.password.toLowerCase()} onChange={handleChange} placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-toggle-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
