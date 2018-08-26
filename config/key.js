require("dotenv").config({ path: "./.env/.keys" });

module.exports = {
  CMC: process.env.CMC_KEY,
  NEWS: process.env.NEWS_KEY
};
