//keys stored in .env
require("dotenv").config();


const CMC = process.env.NEWS_KEY;
const NEWS = process.env.CMC_KEY;


//exports keys to javascript
module.exports = CMC;
module.exports = NEWS;