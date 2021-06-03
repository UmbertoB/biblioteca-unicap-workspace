'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {

    title: DataTypes.STRING,

    scoreNeeded: DataTypes.INTEGER,

    degreeNeeded: DataTypes.INTEGER

  }, { timestamps: false });

  Roles.associate = function (models) {
    Roles.hasOne(models.User, { foreignKey: 'roleId', allowNull: false });
  };

  return Roles;
};