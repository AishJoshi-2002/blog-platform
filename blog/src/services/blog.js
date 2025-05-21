import axiosInstance from './axiosInstance';

// Fetch all blogs
export const fetchBlogs = async () => {
    const response = await axiosInstance.get('blogs/all');
    return response.data.blogs;
};

// Fetch a single blog post by ID
export const fetchSingleBlog = async (id) => {
    const response = await axiosInstance.get(`blogs/${id}`);
    return response.data.blog;
};

// Create a new blog post
export const createBlog = async (title, content) => {
    const response = await axiosInstance.post('blogs/create', { title, content });
    return response.data.blog;
};

// Update an existing blog post by ID
export const updateBlog = async (id, title, content) => {
    const response = await axiosInstance.put(`blogs/update/${id}`, { title, content });
    return response.data.blog;
};

// Delete a blog post by ID
export const deleteBlog = async (id) => {
    const response = await axiosInstance.delete(`blogs/delete/${id}`);
    return response.data.message;
};
