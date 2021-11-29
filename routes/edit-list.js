const express = require("express");
const { listen } = require("../server");
const router = express.Router();
const editListCtrl = require("../controllers/edit-list-controllers");
const { viewItem } = require("../controllers/userList-controllers");

// router.get("/", (req, res) => {
//   res.render("edit-list");
// });

router.get("/", viewItem);

module.exports = router;
