const express = require("express");
const { listen } = require("../server");
const router = express.Router();
const moviesController = require("../controllers/movies-controllers");

router.get("/", moviesController.listMovies);

module.exports = router;
