// Imports for app dependencies
require("dotenv").config();

var express = require("express");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var FileStore = require("session-file-store")(session);
var uuid = require("uuid");
var db = require("./models");

// Define express http server object and port
var app = express();
var PORT = process.env.PORT || 3000;

// BodyParser for JSON data handling by express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow express to create sessions when a client connects
app.use(
  session({
    genid: function(req) {
      return uuid(); // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: process.env.SECRET_KEY || "this-is-super-secret",
    resave: false,
    saveUninitialized: true
  })
);

// Initialize passport and passport session monitoring in express
app.use(passport.initialize());
app.use(passport.session());
//load passport strategies
require("./config/passport.js")(passport, db.user);

// Static files server to clients
app.use(express.static("public"));

// Handlebars setup with express
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes for client requests
require("./routes/apiRoutes")(app);
require("./routes/authRoutes")(app, passport);
require("./routes/htmlRoutes")(app);

// If running a test, set syncOptions.force to true
// clearing the `testdb`
var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
