// create webserver
const express = require('express');
const router = express.Router();
// import model
const Comment = require('../models/comment');

// create route
// get all comments for a post
router.get('/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

// create comment
router.post('/', async (req, res) => {
  const comment = new Comment({
    postId: req.body.postId,
    userId: req.body.userId,
    text: req.body.text,
  });
  try {
    const savedComment = await comment.save();
    res.json(savedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete comment
router.delete('/:commentId', async (req, res) => {
  try {
    const removedComment = await Comment.remove({
      _id: req.params.commentId,
    });
    res.json(removedComment);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
