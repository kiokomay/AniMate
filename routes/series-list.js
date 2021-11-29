const express = require("express");
const { listen } = require("../server");
const router = express.Router();
const animeController = require("../controllers/anime-controllers");

router.get("/", animeController.listSeries);

module.exports = router;
