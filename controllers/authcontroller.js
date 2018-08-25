var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("./user/signup");
};

exports.signin = function(req, res) {
  res.render("./user/signin");
};

exports.signout = function(req, res) {
  req.session.destroy(function(err) {
    if (err) throw err;
    res.redirect("/");
  });
};

exports.profile = function(req, res) {
  console.log(req.user);
  var user = req.user;
  res.render("./user/profile", { user: user });
};

exports.settings = function(req, res) {
  var user = req.user;
  res.render("./user/settings", { user: user });
};
