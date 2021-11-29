const mongoose = require("mongoose");

const userList = new mongoose.Schema({
  rank: Number,
  title: String,
  image_url: String,
  episodes: Number,
  start_date: String,
  end_date: String,
  score: Number,
  user: String,
});

module.exports = mongoose.model("userList", userList);
