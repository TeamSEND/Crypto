module.exports = function(sequelize, DataTypes) {
  var Coinurl = sequelize.define("coinurl", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    website: {
      type: DataTypes.STRING
    },

    expolorer: {
      type: DataTypes.STRING
    },

    sourceCode: {
      type: DataTypes.STRING
    },

    messageBoard: {
      type: DataTypes.STRING
    },

    chat: {
      type: DataTypes.STRING
    },

    announcement: {
      type: DataTypes.STRING
    },

    reddit: {
      type: DataTypes.STRING
    },

    twitter: {
      type: DataTypes.STRING
    }
  });
  return Coinurl;
};
