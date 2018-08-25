"use strict";

// Object for user login, registration and log out
var XHTMLRequests = function() {

    this.post = function() {
        console.log("PPOST request");
    };

    this.get = function() {
        console.log("GET request");
    };

    this.put = function() {
        console.log("PUT request");
    };

    this.delete = function() {
        console.log("DELETE request");
    }
};