const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    rank: Number,
    title: String,
    image_url: String,
    episodes: Number,
    start_date: String,
    end_date: String,
    score: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", moviesSchema);
