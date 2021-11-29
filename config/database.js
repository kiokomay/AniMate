const mongoose = require("mongoose");

mongoose.connect(
  // "mongodb://127.0.0.1:27017/AniMate",
  "mongodb+srv://kiokomay:Dannyd99@animate.ciplm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
