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
  res.render("./user/profile");
};
