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

  app.get("/marketrankings", function(req, res) {
    cmcAPI.listCryptos().then(function(cryptocoins) {
      console.log(cryptocoins);
      res.render("marketrankings", {
        user: req.user,
        cryptocoins: cryptocoins
      });
    });
  });

  app.post("/search", function(req, res) {
    var keyword = req.body.keyword;
    res
      .status(200)
      .send({ result: "redirect", url: "/search/results=" + keyword });
  });

  app.get("/search/results=:keyword", function(req, res) {
    var coinTicker = req.params.keyword;
    cmcAPI.cryptoCoin(coinTicker).then(function(coinData) {
      var marketCoin = coinData[0];
      var metaCoin = coinData[1];
      console.log(marketCoin[Object.keys(marketCoin)[0]]);
      console.log(metaCoin[Object.keys(metaCoin)[0]]);
      res.render("searchresults", {
        user: req.user,
        marketCoin: marketCoin[Object.keys(marketCoin)[0]],
        metaCoin: metaCoin[Object.keys(metaCoin)[0]]
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", { user: req.user });
  });
};
