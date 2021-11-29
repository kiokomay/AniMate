const Anime = require("../models/anime-model");
const User = require("../models/userList");
require("../config/database");

const axios = require("axios");

async function getAnime() {
  try {
    let data = await axios.get("https://api.jikan.moe/v3/top/anime/1/tv");
    return data.data.top;
  } catch (err) {
    console.log(err);
  }
}

async function getAll() {
  await Anime.find().all();
}

const listSeries = function (req, res) {
  Anime.find({}, function (err, all) {
    res.render("series-list", {
      seriesList: all,
    });
  });
};

module.exports.getAll = getAll;
module.exports.listSeries = listSeries;
