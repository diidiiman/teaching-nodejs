const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('landing', {
    title: 'Hello',
    message: 'Hello World!',
  });
});

module.exports = app;
