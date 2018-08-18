//dependencies

const NewsAPI = require("newsapi");
const key = require("./key.js");
const newsapi = new NewsAPI(key);
//placeholder for search
var search = "";

//generic search for trending articles. Only using crypto-coins-news
newsapi.v2.topHeadlines({
    sources: "crypto-coins-news",
    q: search,
    language: "en",
    country: "us"
});