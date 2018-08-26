require("dotenv").config({ path: "./.env/.keys" });

<<<<<<< HEAD
const key = { 
    CMC: process.env.CMC_KEY,
 NEWS: process.env.NEWS_KEY
};

module.exports = key;
=======
module.exports = {
  CMC: process.env.CMC_KEY,
  NEWS: process.env.NEWS_KEY
};
>>>>>>> master
