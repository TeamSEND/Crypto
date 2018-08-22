//dependencies

const NewsAPI = require("newsapi");
//placeholder for the api key. will be removed later
const key = "f5090fe009de4358b098c43bb4137e89"
const newsapi = new NewsAPI(key);
//placeholder for search
var search = "";

//generic search for trending articles. Only using crypto-coins-news
newsapi.v2.topHeadlines({
    sources: "crypto-coins-news",
    q: search
}).then(response => {console.log(response)});

//placeholder for printing on to handlebar page

//--------------------------------------




//--------------------------------------

module.exports = function(sequelize, data){
    
}