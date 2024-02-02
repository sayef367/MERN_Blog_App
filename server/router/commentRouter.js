const express = require('express');
const { comments } = require('../db/storage');

const commentRouter = express.Router();

// Create a new comment
commentRouter.post('/', (req, res) => {
  let commentLength = comments.length + 1;
  const comment = req.body;
  const newComment = {
    ...comment,
    id: commentLength
  };
  console.log(newComment);
  comments.push(newComment);
  res.status(201).json({ message: 'Comment successfully add.' });
});

// Get all comments
commentRouter.get('/', (req, res) => {
  res.status(200).json(comments);
});

// Delete a comment
commentRouter.delete('/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  comments.forEach((value, index) => {
    if(value.id === commentId) {
      comments.splice(index, 1); 
    };
  });
  console.log("Delete comment id:", commentId);
  res.json({ message: 'Comment deleted successfully' });
});

// Update a comment
commentRouter.put('/', (req, res) => {
  const updatedComment = req.body;
  const index = comments.findIndex(comment => comment.id === updatedComment.id);
  if (index !== -1) {
    comments[index] = { ...comments[index], ...updatedComment };
    console.log("Update comment Id:", index);
    res.status(200).json({ message: 'Comment successfully update.' });
  } else {
    res.status(404).json({ error: 'Comment not found' });
  };
});

module.exports = commentRouter;