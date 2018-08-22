require("dotenv").config({path: "../.env/.keys"});

const CMC = process.env.CMC_KEY;
const NEWS = process.env.NEWS_KEY;

module.exports = CMC;
module.exports = NEWS;

console.log(CMC)