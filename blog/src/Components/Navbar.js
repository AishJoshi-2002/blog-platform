import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Cookies from 'js-cookie';
import '../styles/Navbar.css';

const Navbar = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const location = useLocation();

    const handleLogout = () => {
        Cookies.remove('token');
        setIsLoggedIn(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">📖 BlogBrew</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
            <div className="navbar-links-auth">
                {!isLoggedIn ?
                    (<>
                        <Link to="/login">
                            <button className={`login-btn ${location.pathname === '/login' ? 'active' : ''}`}>Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className={`signup-btn ${location.pathname === '/signup' ? 'active' : ''}`}>Sign Up</button>
                        </Link>
                    </>) :
                    (<button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>)}

            </div>
        </nav>
    );
};

export default Navbar;
