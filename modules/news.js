//dependencies

const NewsAPI = require("newsapi");
const keys = require("../config/key");
//placeholder for search

//generic search for trending articles. Only using crypto-coins-news
var newsObject = function (APIkey) {
    this.newsapi = new NewsAPI(APIkey);
    this.articles = {};
    this.topArticles = async function (search) {
        return new Promise((resolve, reject) => {

            const error = false;
          

            this.newsapi.v2.topHeadlines({
                sources: "crypto-coins-news",
                q: search
            }).then(
                response => {
                    this.articles = response;
                    return this.articles;
                });  
                if (!error){
                resolve()
            } else {
                reject("Error: unable to handle request.")
            }
        });
    }
}

// var news = new newsObject(keys.NEWS)
// var topTen = news.topArticles("Bitcoin");

