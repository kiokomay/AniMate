var express = require("express");
const { listen } = require("../server");
var router = express.Router();
const usersListController = require("../controllers/userList-controllers");

router.post("/", usersListController.create);

router.post("/edit", usersListController.updateList);

router.get("/delete", usersListController.deleteItem);

module.exports = router;
