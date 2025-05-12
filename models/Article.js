const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, min: 1, max: 10, required: true }
}, { _id: false });

const articleSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  authors:    [{ type: String, required: true }],
  postedAt:   { type: Date,   default: Date.now },
  content:    { type: String, required: true },
  tags:       [{ type: String }],
  reviews:    [reviewSchema]
});

module.exports = mongoose.model('Article', articleSchema);