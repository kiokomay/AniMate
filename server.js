var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./config/database");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/userList");
var moviesRouter = require("./routes/movies-list");
var seriesRouter = require("./routes/series-list");
var profileRouter = require("./routes/profile-routes");
var editRouter = require("./routes/edit-list");
var addToListRouter = require("./routes/add-to-list");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user-list", usersRouter);
app.use("/movies-list", moviesRouter);
app.use("/series-list", seriesRouter);
app.use("/profile", profileRouter);
app.use("/edit-list", editRouter);
app.use("/add-to-list", addToListRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.get("/", function (req, res) {
  res.render("homepage");
});

module.exports = app;
