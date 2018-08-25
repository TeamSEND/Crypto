var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.post(
    "/user/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/user/profile",
      failureRedirect: "/"
    })
  );

  app.post(
    "/user/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/user/profile",
      failureRedirect: "/"
    })
  );

  app.get("/user/signout", authController.signout);

  app.get("/user/profile", isLoggedin, authController.profile);

  app.get("/user/profile/settings", isLoggedin, authController.settings);

  app.post("/user/profile/settings", isLoggedin, authController.settings);

  function isLoggedin(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/user/signin");
  }
};
