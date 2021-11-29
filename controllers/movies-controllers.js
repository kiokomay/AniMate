const Movie = require("../models/movies-model");
const User = require("../models/userList");
require("../config/database");

const axios = require("axios");

async function getMovie() {
  try {
    let data = await axios.get("https://api.jikan.moe/v3/top/anime/1/movie");
    return data.data.top;
  } catch (err) {
    console.log(err);
  }
}

async function getAll() {
  await Movie.find().all();
}

const listMovies = function (req, res) {
  Movie.find({}, function (err, all) {
    res.render("movies-list", {
      moviesList: all,
    });
  });
};

module.exports.getAll = getAll;
module.exports.listMovies = listMovies;
