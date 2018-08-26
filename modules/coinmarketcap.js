var axios = require("axios");

module.exports = function(APIkey) {
  //searches for the crypto currency type and ID
  this.coinData;
  var key = APIkey;
  var url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10";
  var config = {
    headers: {
      "X-CMC_PRO_API_KEY": key
    }
  };

  //gets the top ten ranked cryptocurrencies
  this.bestCryptos = function() {
    return (
      axios
        .get(url, config)
        .then(function(response) {
          // parses the response as a JSON object
          var coinJSON = Object.values(
            JSON.parse(JSON.stringify(response.data))
          );
          // sets the coinData variable with the parsed object
          this.coinData = coinJSON;
          return this.coinData;
        })
        // console logs an error.
        .catch(function (error) {
          console.log(error);
        })
    );
  };
};

// Testing & Debugging
// var secretKey = require("../config/key.js");

// var test = new CMCquery(secretKey.CMC);
// test.bestCryptos().then(function (topTen) { console.log(topTen) });
