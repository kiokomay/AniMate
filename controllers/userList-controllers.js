const userList = require("../models/userList");

function create(req, res) {
  console.log(req.body);
  const newList = new userList();
  newList.title = req.body.title;
  newList.image_url = req.body.imageUrl;
  newList.episodes = req.body.episodes;
  newList.start_date = req.body.startDate;
  newList.end_date = req.body.endDate;
  newList.score = req.body.score;

  newList.save();
  res.redirect("/profile");
}

function viewUserList(req, res) {
  userList.find({}, function (err, all) {
    res.render("profile", { userList: all });
    console.log(all);
  });
}

//update

function updateList(req, res) {
  userList.findById(req.body.id, function (err, item) {
    item.title = req.body.title;
    item.episodes = req.body.episodes;
    item.start_date = req.body.startDate;
    item.end_date = req.body.endDate;
    item.score = req.body.score;
    item.image_url = req.body.imageUrl;
    item.save();
    res.redirect("/profile");
  });
}

function viewItem(req, res) {
  userList.findOne({ _id: req.query.id }, function (err, item) {
    res.render("edit-list", { item: item });
  });
}

//delete

function deleteItem(req, res) {
  console.log(req.query.id);
  userList.deleteOne({ _id: req.query.id }, function (err) {
    // console.log(err, "---------");
    res.redirect("/profile");
  });
}

module.exports = { create, viewUserList, updateList, deleteItem, viewItem };
