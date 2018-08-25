module.exports = function(sequelize, DataTypes) {
  var Coin = sequelize.define("coin", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    coinid: {
      type: DataTypes.INTEGER
    },

    name: {
      type: DataTypes.STRING
    },

    symbol: {
      type: DataTypes.STRING
    },

    category: {
      type: DataTypes.TEXT
    },

    slug: {
      type: DataTypes.STRING
    },

    logo: {
      type: DataTypes.STRING
    },

    tags: {
      type: DataTypes.STRING
    }
  });
  return Coin;
};
