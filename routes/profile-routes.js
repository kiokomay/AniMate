const express = require("express");
const { listen } = require("../server");
const { viewUserList } = require("../controllers/userList-controllers");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("profile");
// });

router.get("/", viewUserList);

module.exports = router;
