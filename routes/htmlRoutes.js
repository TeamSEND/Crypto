var db = require("../models");
var cmc = require("../modules/coinmarketcap.js");
var news = require("../modules/news.js");
const keys = require("../config/key");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      var topTen = cmc.bestCryptos(keys.CMC);
      console.log(topTen)
      res.render("index", {
        topTen: topTen,
      })
      
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
