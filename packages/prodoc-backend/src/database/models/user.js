'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    name: DataTypes.STRING,

    email: DataTypes.STRING,

    password: DataTypes.STRING,

    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    }

  }, {});

  User.associate = function (models) {
    User.hasMany(models.Activity, { onDelete: 'cascade', foreignKey: 'userId', allowNull: false });
    User.hasMany(models.Degree, { onDelete: 'cascade', foreignKey: 'userId', allowNull: false });
    User.belongsTo(models.Roles, { foreignKey: 'roleId', allowNull: false });
  };

  return User;
};