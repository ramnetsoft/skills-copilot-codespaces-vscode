// Create Web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments.json');
const fs = require('fs');
const path = require('path');

// Use body-parser to parse POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use express.static to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up GET route to serve comments.json
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// Set up POST route to save comments to comments.json
app.post('/api/comments', (req, res) => {
  const newComment = {
    id: Date.now(),
  }
});