require("dotenv").config({path: "../.env/.keys"});

const key = { 
    CMC: process.env.CMC_KEY,
 NEWS: process.env.NEWS_KEY
};

module.exports = key;