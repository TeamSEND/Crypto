//dependencies

const NewsAPI = require("newsapi");
const keys = require("../config/key");
//placeholder for search

//generic search for trending articles. Only using crypto-coins-news
var newsObject = function (APIkey) {
    this.newsapi = new NewsAPI(APIkey);
    this.articles = {};
    this.topArticles = async function (search) {
        await this.newsapi.v2.topHeadlines({
            sources: "crypto-coins-news",
            q: search
        }).then(
            response => 
            {
                this.articles = response;
            });
            return this.articles
    };
}

var news =  new newsObject(keys.NEWS)
var topTen = news.topArticles("Bitcoin");

console.log(topTen)
