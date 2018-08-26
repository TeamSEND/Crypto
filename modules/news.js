var axios = require("axios");

var newsAPI = function(APIkey) {
  this.articles;
  var key = APIkey;

  this.topHeadlines = function(keyword) {
    var config = {
      q: keyword,
      apiKey: key
    };
    return (
      axios({
        method: "get",
        baseURL: "https://newsapi.org/v2/",
        url: "/top-headlines?sources=crypto-coins-news",
        params: config
      })
        .then(function(response) {
          // parses the response as a JSON object
          var articlesResults = Object.values(
            JSON.parse(JSON.stringify(response.data))
          );
          // sets the coinData variable with the parsed object
          this.articles = articlesResults;
          return this.articles;
        })
        // console logs an error.
        .catch(function (error) {
          console.log(error);
        })
    );
  };

  this.everything = function(keyword) {
    var config = {
      q: keyword,
      apiKey: key
    };
    return (
      axios({
        method: "get",
        baseURL: "https://newsapi.org/v2/",
        url: "/everything?sources=crypto-coins-news",
        params: config
      })
        .then(function(response) {
          // parses the response as a JSON object
          var articlesResults = Object.values(
            JSON.parse(JSON.stringify(response.data))
          );
          // sets the coinData variable with the parsed object
          this.articles = articlesResults;
          return this.articles;
        })
        // console logs an error.
        .catch(function(error) {
          console.log(error);
        })
    );
  };
};

// Testing & Debugging
// var secretKey = require("../config/key.js");

// var test = new newsAPI(secretKey.NEWS);

// test.topHeadlines().then(function(articles) {
//   console.log(articles);
// });
