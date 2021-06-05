'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true  },

    name: DataTypes.STRING,

    email: DataTypes.STRING,

    password: DataTypes.STRING,

    perfil: DataTypes.STRING,

  }, {freezeTableName: true });

  User.associate = function (models) { };

  return User;
};