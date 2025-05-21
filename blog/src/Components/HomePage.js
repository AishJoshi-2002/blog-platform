import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <main className="hero-section">
        <div className="hero-card">
          <div className="hero-icon">📖</div>
          <h1>Welcome to BlogBrew</h1>
          <p>
            A secure platform with role-based access control. Explore our blogs or create your own.
          </p>
          <button className="browse-btn">Browse Blogs</button>
        </div>

        <section className="latest-posts">
          <h2>Latest Blog Posts</h2>
          <p className="no-posts">No blog posts available yet.</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
