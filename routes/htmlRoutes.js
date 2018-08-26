var db = require("../models");
var keys = require("../config/key");
var CoinMarketCapAPI = require("../modules/coinmarketcap");
var CoinNewsAPI = require("../modules/coinnewsapi");

// Initialize API modules
var cmcAPI = new CoinMarketCapAPI(keys.CMC);
var cnAPI = new CoinNewsAPI(keys.NEWS);

module.exports = function(app) {
  // Renders front page with top articles
  app.get("/", function(req, res) {
    cnAPI.topHeadlines().then(function(articles) {
      console.log(articles);
      res.render("index", {
        user: req.user,
        articles: articles
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", { user: req.user });
  });
};
