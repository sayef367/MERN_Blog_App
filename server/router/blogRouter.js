const express = require('express');
const { blogs, comments } = require('../db/storage');

const blogRouter = express.Router();

// Create a new blog
blogRouter.post('/', (req, res) => {
  let blogLength = blogs.length + 1;
  const blog = req.body;
  const newBlog = {
    ...blog,
    id: blogLength
  };
  blogs.push(newBlog);
  console.log(newBlog);
  res.status(201).json({ message: 'Blog successfully add.' });
});

// Get all blogs
blogRouter.get('/', (req, res) => {
  res.status(200).json(blogs);
});

// Get id blog
blogRouter.get('/:blogId', (req, res) => {
  const blogId = parseInt(req.params.blogId);
  const getBlog = blogs[blogId - 1];
  const blogComments = comments.filter(comment => comment.blogId === blogId);
  const page = {
    getBlog, 
    blogComments
  };
  res.status(200).json(page);
});

// Delete a blog
blogRouter.delete('/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  blogs.forEach((value, index) => {
    if(value.id === blogId) {
      blogs.splice(index, 1); 
    };
  });
  console.log("Delete blog id:", blogId);
  res.json({ message: 'Blog deleted successfully' });
});

// Update a new blog
blogRouter.put('/', (req, res) => {
  const updatedBlog = req.body;
  const index = blogs.findIndex(blog => blog.id === updatedBlog.id);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...updatedBlog };
    console.log("Update blog Id:", index);
    res.status(200).json({ message: 'Blog successfully update.' });
  } else {
    res.status(404).json({ error: 'Blog not found' });
  };
});


module.exports = blogRouter;