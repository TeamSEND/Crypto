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
      res.render("index", {
        user: req.user,
        articles: articles
      });
    });
  });

  app.get("/search", function(req, res) {
    cmcAPI.bestCryptos().then(function(cryptocoins) {
      console.log(cryptocoins);
      res.render("search", {
        user: req.user,
        cryptocoins: cryptocoins
      });
    });
  });

  app.post("/search", function(req, res) {
    console.log("got it!");
    var keyword = req.body.keyword;
    res
      .status(200)
      .send({ result: "redirect", url: "/search/results=" + keyword });
  });

  app.get("/search/results=:keyword", function(req, res) {
    res.render("searchresults", {
      user: req.user,
      keyword: req.params.keyword
    });
  });
  app.get("/basics101", function(req, res) {
    res.render("charts", { user: req.user });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", { user: req.user });
  });


};

