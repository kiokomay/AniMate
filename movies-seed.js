require("./config/database");
const Movie = require("./models/movies-model");
const User = require("./models/userList");

const axios = require("axios");

async function getMovies() {
  try {
    let data = await axios.get("https://api.jikan.moe/v3/top/anime/1/movie");
    return data.data.top;
  } catch (err) {
    console.log(err);
  }
}

async function fillDatabase() {
  try {
    let moviesData = await getMovies();
    moviesData.forEach(async (movie, idx) => {
      const a = new Movie({
        rank: movie.rank,
        title: movie.title,
        image_url: movie.image_url,
        episodes: movie.episodes,
        start_date: movie.start_date,
        end_date: movie.end_date,
        score: movie.score,
      });
      await a.save();
    });
  } catch (err) {
    console.log(err);
  }
}

function getAll() {
  Movie.find({}, function (err, all) {
    console.log(all);
  });
}
fillDatabase();
