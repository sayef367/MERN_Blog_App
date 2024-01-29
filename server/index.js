const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const port = 4000;

// Store the data
const blogs = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
  }
];
const comments = [
  {
    blogId: 1,
    id: 1,
    name: "Eliseo",
    email: "eliseo@gmail.com",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
  },
  {
    blogId: 2,
    id: 2,
    name: "Jayne Kuhic",
    email: "jaynekuhic@gmail.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
  },
  {
    blogId: 1,
    id: 3,
    name: "Nikita",
    email: "nikita@gmail.com",
    body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione"
  }
];

// Create a new blog
app.post('/blogs', (req, res) => {
  let blogLength = blogs.length + 1;
  const blog = req.body;
  const newBlog = {
    ...blog,
    id: blogLength
  };
  console.log(newBlog)
  blogs.push(newBlog);
  res.status(201).json({ message: 'Blog successfully add.' });
});

// Get all blogs
app.get('/blogs', (req, res) => {
  res.status(200).json(blogs);
});

// Get id blog
app.get('/blogs/:blogId', (req, res) => {
  const blogId = parseInt(req.params.blogId);
  const getBlog = blogs[blogId - 1];
  const blogComments = comments.filter(comment => comment.blogId === blogId);
  const page = {
    getBlog, 
    blogComments
  }
  res.status(200).json(page);
});

// Create a new comment
app.post('/comment', (req, res) => {
  let commentLength = comments.length + 1;
  const comment = req.body;
  const newComment = {
    ...comment,
    id: commentLength
  };
  console.log(newComment)
  comments.push(newComment);
  res.status(201).json({ message: 'Comment successfully add.' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
