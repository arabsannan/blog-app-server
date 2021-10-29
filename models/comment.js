const mongoose = require("mongoose");

// Defining the Comment Schema
const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
});

// Compiling a Comment model
const Comment = mongoose.model("Comment", CommentSchema);

// Exporting Comment model
module.exports = { Comment };
