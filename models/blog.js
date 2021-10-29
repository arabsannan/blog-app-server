const mongoose = require("mongoose");

// Defining the Blog Schema
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: String,
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
});

// Compiling a Blog model
const Blog = mongoose.model("Blog", BlogSchema); //didn'nt need the new keyword here

// exporting Blog model
module.exports = { Blog }; //its a module export so exports in {}
