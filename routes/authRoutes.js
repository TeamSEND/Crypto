var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/user/signup", authController.signup);

  app.post(
    "/user/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/user/signup"
    })
  );

  app.get("/user/signin", authController.signin);

  app.post(
    "/user/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/user/profile",
      failureRedirect: "/user/signin"
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
