const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  name: String,
  message: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', PostSchema);