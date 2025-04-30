const blogModel = require('../models/blog.model');
const { isAuthorized } = require('../services/blog.service');

const createBlog = async (req, res, next) => {  
    try {
        isAuthorized('create', req.user);
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const blog = await blogModel.create({
            title,
            content,
            author: req.user._id
        })
        return res.status(201).json({ message: 'Blog created successfully', blog });
    } catch (error) {
        res.status(400).json({ error: error.message });
        // return res.status(500).json({ message: 'Internal server error' });
    }
}

const updateBlog = async (req, res, next) => {
    isAuthorized('update', req.user);
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        if (!id || !title || !content) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const blog = await blogModel.findByIdAndUpdate(id, {
            title,
            content
        }, { new: true });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        return res.status(200).json({ message: 'Blog updated successfully', blog });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteBlog = async (req, res, next) => {
    isAuthorized('delete', req.user);
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Blog ID is required' });
        }
        const blog = await blogModel.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await blogModel.find().populate('author', 'name email');
        return res.status(200).json({ message: 'Blogs fetched successfully', blogs });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getSingleBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'Blog ID is required' });
        }
        const blog = await blogModel.findById(id).populate('author', 'name email');
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        return res.status(200).json({ message: 'Blog fetched successfully', blog });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { createBlog, updateBlog, deleteBlog, getAllBlogs, getSingleBlog };