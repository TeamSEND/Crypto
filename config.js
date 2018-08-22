//keys stored in .env
require("dotenv").config();


const CMC = process.env.NEWS_KEY;
console.log(process.env.NEWS_SECRET)
const NEWS = process.env.CMC_KEY;
console.log(process.env.CMC_SECRET)

//exports keys to javascript
module.exports = CMC;
module.exports = NEWS;