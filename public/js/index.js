// General purpose functionality

// Search for a keyword
var Search = (function() {
  // POST request for search input
  var searchPOST = function(keyword) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/search",
      data: JSON.stringify(keyword),
      success: function(response) {
        console.log(response);
        if (response.result === "redirect") {
          window.location.replace(response.url);
        }
      }
    });
  };

  return {
    init: function() {
      document
        .querySelector("#search")
        .addEventListener("keypress", function(event) {
          var key = event.which || event.keyCode;
          if (key === 13) {
            var keyword = {
              keyword: document.querySelector("#search").value
            };
            if (keyword) {
              searchPOST(keyword);
            }
          }
        });
    }
  };
})();

window.onload = function() {
  // Initializes all the class objects to setup for the proper functionality
  // of the full app features
  // var xreq = XHTMLRequests.init();
  Search.init();
  Session.init();
};

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "BTC",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "ETH",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "LTC",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "ETC",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "XMR",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'MarketCapitalization (in millions)',
    },
    legend: { 
      display: true ,
  },
}
});

new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["BTC", "ETH", "LTC", "ETC", "DGB"],
    datasets: [
      {
        label: "Block Transactions Last 24hours (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    tooltips:{
      bodyFontColor: "white"},
    legend: { 
    display: true ,
   labels:{
    fontColor: 'white'
   }, 
  },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});


new Chart(document.getElementById("radar-chart"), {
  type: 'radar',
  data: {
    labels: ["BTC", "ETH", "LTC", "ETC", "DGB"],
    datasets: [
      {
        label: "Number of Searches",
        fill: true,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [8.77,55.61,21.69,6.62,6.82]
      }, {
        label: "Visa Trasactions",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        data: [35.48,54.16,7.61,8.06,4.45]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Distribution in % of Merchant Transactions for ETH / Visa'
    }
  }
});