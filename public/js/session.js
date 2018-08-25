"use strict";

// Object for user login, registration and log out
var Session = (function() {

  function handleUserSignup(event) {
    console.log("User Signup Object");
  }

  function handleUserSignin(event) {
    console.log("User Signin Object");
  }

  function handleUserSettings(event) {
    console.log("User Settings Object");
  }

  return {
    init: function() {
      firebase.auth().onAuthStateChanged(authStateChangeListener);

      var loginDialog = document.querySelector("#login-dialog");
      dialogPolyfill.registerDialog(loginDialog);

      //Adds event listener to the login button, opens the login dialog when clicked
      document.querySelector("#login-btn").addEventListener("click", function() {
        loginDialog.showModal();
      });

      //Event listener that invokes the sign in function when a user enters form data and clicks
      // on login
      document.querySelector("#sign-in").addEventListener("click", signInWithEmailandPassword);

      //Signouts a user from firebase when clicking on the logout button, returns a feedback 
      //message if the logout is successfull or unsuccessfull
      document.querySelector("#logout-btn").addEventListener("click", function() {
        firebase.auth().signOut().then(function() {
            console.log('Signed Out');
        }, function(error) {
            console.error('Sign Out Error', error);
        });
      });
            
            //Required by Material Design lite to support dialog boxes on platforms 
            // that are not Google Chrome
            createDialog = document.querySelector("#create-account-dialog");
            dialogPolyfill.registerDialog(createDialog);

        //Opens the registration dialog when create account button is clicked
        document.querySelector("#create-account").addEventListener("click", function() {
            createDialog.showModal();
        });

        //Submits the form data for registration when a user clicks submit
        document.querySelector("#entry-submit").addEventListener("click", submitCreateAccount);
    },
  };
})();
