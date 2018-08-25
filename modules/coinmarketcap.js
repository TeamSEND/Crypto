//dependencies
var secretKey = require("../config/key.js");
var keyz = secretKey.CMC;
// const key = "3c4f7072-2810-498f-8b55-619f95408199";
console.log(keyz);

var axios = require("axios");
var coinData = "";

var CMCquery = function(APIkey) {
  //searches for the crypto currency type and ID
  this.key = APIkey;
  this.url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency";
  this.config = {
    headers: {
      "X-CMC_PRO_API_KEY": this.key
    }
  };

  // Using axios to get the api call
  this.axiosRequest = function(request) {
    axios
      .get(request, this.config)
      .then(function(response) {
        //parses the response as a JSON object
        var coinJSON = Object.values(JSON.parse(JSON.stringify(response.data)));
        //sets the coinData variable with the parsed object
        coinData = coinJSON;
        console.log(coinData);
        return coinData;
      })
      //console logs an error.
      .catch(function(error) {
        console.log(error.response.status);
      });
  };
  //gets the top ten ranked cryptocurrencies
  this.bestCryptos = function() {
    var topTen = this.url + "/listings/latest?start=1&limit=10";
    this.axiosRequest(topTen);
  };
};

//----- placeholder for cryptocurrency symbol search
// this.info = function () {
//   console.log("this is information")
// };

var test = new CMCquery(keyz);
test.bestCryptos();

// module.exports = function(sequelize, data){

// }
