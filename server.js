const express = require('express');

const app = express();

const posts = [
  {
    username: 'mubashir ',
    title: 'post 1',
  },
  {
    username: 'ali',
    title: 'post 2',
  },
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
