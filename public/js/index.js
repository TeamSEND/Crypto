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
