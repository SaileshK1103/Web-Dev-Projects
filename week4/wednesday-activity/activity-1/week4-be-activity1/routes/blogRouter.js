const express = require('express');
const router = express.Router();

const {
    getAllBlogs, 
    getBlogById, 
    createBlog, 
    updateBlog, 
    deleteBlog} 
    = require('../controllers/blogController');

// GET /blogs
router.get('/', getAllBlogs);

// GET /blogs/:blogId
router.get('/:blogId', getBlogById);

// POST /blogs
router.post('/', createBlog);

// DELETE /blogs/:blogId
router.delete('/:blogId', deleteBlog);

// PATCH /blogs/:blogId
router.patch('/:id', updateBlog);

module.exports = router;