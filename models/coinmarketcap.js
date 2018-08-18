const key = require('../config.js');
const APIkey = key.cmc;
const axios = require('axios');

const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1,2,10'
let config = {
    headers: {
        "X-CMC_PRO_API_KEY": APIkey, 
    }
  };

// Make a request for a user with a given ID
axios.get(url, config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.response.status)
  });