"use strict";

// Object for user login, registration and log out
var Session = (function() {
  var request = {
    signin: function(data) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/user/signin",
        data: JSON.stringify(data),
        success: function(response) {
          console.log(response);
          if (response.result === "redirect") {
            window.location.replace(response.url);
          }
        }
      });
    },
    signout: function() {
      return $.ajax({
        url: "/user/signout",
        type: "GET"
      });
    },
    signup: function(data) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        url: "/user/signup",
        type: "POST",
        data: JSON.stringify(data),
        success: function(response) {
          console.log(response);
          if (response.result === "redirect") {
            window.location.replace(response.url);
          }
        }
      });
    }
  };

  function handleUserSignup(event) {
    var formData = {
      displayName: document.getElementById("form-displayname").value,
      email: document.getElementById("form-email").value,
      firstName: document.getElementById("form-firstname").value,
      lastName: document.getElementById("form-lastname").value,
      password: document.getElementById("form-password").value
    };

    request.signup(formData);
  }

  function handleUserSignin(event) {
    var formData = {
      email: document.getElementById("signin-email").value,
      password: document.getElementById("signin-password").value
    };

    request.signin(formData);
  }

  function handleUserSignout(event) {
    request.signout();
  }

  function handleUserSettings(event) {
    console.log("User Settings Object");
  }

  return {
    init: function() {
      // LOGIN DIALOG
      var signinDialog = document.querySelector("#signin-dialog");
      dialogPolyfill.registerDialog(signinDialog);

      // Adds event listener to the login button, opens the login dialog when clicked
      document
        .querySelector("#signin-btn")
        .addEventListener("click", function() {
          signinDialog.showModal();
        });

      document
        .querySelector("#signin-btn-submit")
        .addEventListener("click", handleUserSignin);

      // REGISTRAGTION DIALOG
      var signupDialog = document.querySelector("#signup-dialog");
      dialogPolyfill.registerDialog(signupDialog);

      // Adds event listener to the login button, opens the login dialog when clicked
      document
        .querySelector("#signup-btn")
        .addEventListener("click", function() {
          signupDialog.showModal();
        });

      document
        .querySelector("#signup-btn-submit")
        .addEventListener("click", handleUserSignup);

      document
        .querySelector("#signout-btn-submit")
        .addEventListener("clicl", handleUserSignout);
    }
  };
})();
