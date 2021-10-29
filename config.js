const mongoose = require("mongoose");

//required to use .env variables
require("dotenv").config();

//Set up default mongoose connection (Atlas)
const mongoDB = process.env.URI;

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("Connected Successfully to Database"))
  .catch((err) => console.error("MongoDB connection error: ", err));