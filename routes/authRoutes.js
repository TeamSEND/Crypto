

var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/signup"
    })
  );

  app.get("/signin", authController.signin);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/profile",
      failureRedirect: "/signin"
    })
  );

  app.get("/signout", authController.signout);

  app.get("/profile", isLoggedin, authController.profile);

  function isLoggedin(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/signin");
  }
};
