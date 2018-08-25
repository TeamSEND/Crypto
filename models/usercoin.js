module.exports = function(sequelize, DataTypes) {
  var Usercoin = sequelize.define("usercoins", {
    followStatus: {
      type: DataTypes.STRING
    }
  });
  return Usercoin;
};
