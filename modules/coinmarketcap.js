var axios = require("axios");

module.exports = function(APIkey) {
  //searches for the crypto currency type and ID
  var key = APIkey;
  var listingsURI =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=15";
  var infoURI =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=";
  var quotesURI =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=";
  var config = {
    headers: {
      "X-CMC_PRO_API_KEY": key
    }
  };

  //gets the top ten ranked cryptocurrencies
  this.listCryptos = function() {
    return (
      axios
        .get(listingsURI, config)
        .then(function(response) {
          // parses the response as a JSON object
          var coinsJSON = Object.values(
            JSON.parse(JSON.stringify(response.data))
          )[1];
          // sets the coinData variable with the parsed object
          return coinsJSON;
        })
        // console logs an error.
        .catch(function(error) {
          console.log(error);
        })
    );
  };

  // GET request for META and Market Data
  this.cryptoCoin = function(coinTicker) {
    return Promise.all([
      axios
        .get(quotesURI + coinTicker, config)
        .then(function(response) {
          // parses the response as a JSON object
          quotesCoin = Object.values(
            JSON.parse(JSON.stringify(response.data))
          )[1];

          // Returns the parsed JSON object
          return quotesCoin;
        })
        // console logs an error.
        .catch(function(error) {
          console.log(error);
        }),
      axios
        .get(infoURI + coinTicker, config)
        .then(function(response) {
          // parses the response as a JSON object
          infoCoin = Object.values(
            JSON.parse(JSON.stringify(response.data))
          )[1];
          // Returns the parsed JSON object
          return infoCoin;
        })
        // console logs an error.
        .catch(function(error) {
          console.log(error);
        })
    ]);
  };
};

// Testing & Debugging
// var secretKey = require("../config/key.js");

// var test = new CMCquery(secretKey.CMC);
// test.bestCryptos().then(function (topTen) { console.log(topTen) });
