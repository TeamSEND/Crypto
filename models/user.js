module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    firstName: {
      type: DataTypes.STRING,
      notEmpty: true
    },

    lastName: {
      type: DataTypes.STRING,
      notEmpty: true
    },

    displayName: {
      type: DataTypes.TEXT
    },

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  return User;
};
