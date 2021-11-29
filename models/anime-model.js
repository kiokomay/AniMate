const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  rank: Number,
  title: String,
  image_url: String,
  episodes: Number,
  start_date: String,
  end_date: String,
  score: Number,
});

module.exports = mongoose.model("Anime", animeSchema);
