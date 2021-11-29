const express = require("express");
const { listen } = require("../server");
const router = express.Router();
const editListCtrl = require("../controllers/edit-list-controllers");

router.get("/", (req, res) => {
  res.render("add-to-list");
});

// router.post("/", editListCtrl.createAnime);

module.exports = router;
