const express = require('express');
const cors = require('cors');
const blogRouter = require('./router/blogRouter');
const commentRouter = require('./router/commentRouter');
const favoriteRouter = require('./router/favoriteRouter');

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

app.use('/blogs', blogRouter);
app.use('/comment', commentRouter);
app.use('/favorite', favoriteRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
