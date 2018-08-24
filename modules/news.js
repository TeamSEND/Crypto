//dependencies

const NewsAPI = require("newsapi");
const secretKey = require("../config/key.js");
const key = secretKey.NEWS;
const newsapi = new NewsAPI(key);
//placeholder for search
var search = "Bitcoin";

//generic search for trending articles. Only using crypto-coins-news
newsapi.v2.topHeadlines({
    sources: "crypto-coins-news",
    q: search
}).then(response => {console.log(response)});

//placeholder for printing on to handlebar page

//--------------------------------------




//--------------------------------------

// module.exports = function(sequelize, data){
    
// }