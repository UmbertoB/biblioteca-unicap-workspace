'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    id: { type: DataTypes.INTEGER, autoIncrement: true },

    name: DataTypes.STRING,

    email: DataTypes.STRING,

    password: DataTypes.STRING,

    perfil: DataTypes.STRING,

  }, {});

  User.associate = function (models) { };

  return User;
};