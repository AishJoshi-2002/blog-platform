import React from 'react';
import '../styles/BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <main className="blog-main">
        <h1 className="blog-title">All Blog Posts</h1>

        <div className="blog-content">
          <input
            type="text"
            placeholder="🔍 Search posts..."
            className="blog-search"
          />
          <p className="no-posts-msg">No blog posts available yet.</p>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
