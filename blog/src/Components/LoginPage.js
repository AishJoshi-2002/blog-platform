import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/Auth.css';

const LoginPage = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, user } = await loginUser(email, password);
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        <p className="auth-toggle-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
