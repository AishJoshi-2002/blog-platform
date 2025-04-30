const express = require('express');
const router = express.Router();
const { authUser } = require('../middlewares/auth.middleware');
const { createBlog, getAllBlogs, getSingleBlog, updateBlog, deleteBlog } = require('../controllers/blog.controller');

router.post('/create', authUser, createBlog);

router.put('/update/:id', authUser, updateBlog);

router.delete('/delete/:id', authUser, deleteBlog);

router.get('/all', authUser, getAllBlogs);

router.get('/:id', authUser, getSingleBlog);

module.exports = router;