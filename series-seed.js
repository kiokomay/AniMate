require("./config/database");
const Anime = require("./models/anime-model");
const User = require("./models/userList");

const axios = require("axios");
const { deleteMany } = require("./models/anime-model");

async function getAnime() {
  try {
    let data = await axios.get("https://api.jikan.moe/v3/top/anime/1/tv");
    return data.data.top;
  } catch (err) {
    console.log(err);
  }
}

async function fillDatabase() {
  try {
    let animeData = await getAnime();
    animeData.forEach(async (anime, idx) => {
      console.log(idx);
      const a = new Anime({
        rank: anime.rank,
        title: anime.title,
        image_url: anime.image_url,
        episodes: anime.episodes,
        start_date: anime.start_date,
        end_date: anime.end_date,
        score: anime.score,
      });
      await a.save();
    });
  } catch (err) {
    console.log(err);
  }
}

function getAll() {
  Anime.find({}, function (err, all) {
    console.log(all);
  });
}

fillDatabase();
