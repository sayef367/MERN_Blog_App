const express = require('express');
const { blogs, favorite } = require('../db/storage');

const favoriteRouter = express.Router();

//favorite add id
favoriteRouter.post('/:favoriteId', (req, res) => {
  const favoriteId = parseInt(req.params.favoriteId);
  const favoritedata = blogs.filter(blog => blog.id === favoriteId);
  favorite.push(favoritedata[0]);
  res.status(200).json({ message: 'save your like post' });
});

// Get all favorite
favoriteRouter.get('/', (req, res) => {
  res.status(200).json(favorite);
});

// Delete a favorite
favoriteRouter.delete('/:id', (req, res) => {
  const favoriteId = parseInt(req.params.id);
  favorite.forEach((value, index) => {
    if(value.id === favoriteId) {
      favorite.splice(index, 1); 
    };
  });
  res.json({ message: 'you are unlike post' });
});

//favorite post like or unlike
favoriteRouter.get('/like/:favoriteId', (req, res) => {
  const favoriteId = parseInt(req.params.favoriteId);
  const favoritedata = favorite.filter(item => item.id === favoriteId);
  if(favoritedata.length === 1)return res.status(200).send(true);
  if(favoritedata.length === 0)return res.status(200).send(false);
});

module.exports = favoriteRouter;