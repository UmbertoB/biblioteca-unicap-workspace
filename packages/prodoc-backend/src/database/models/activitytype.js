'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActivityType = sequelize.define('ActivityType', {

    title: DataTypes.STRING,

    score: DataTypes.INTEGER

  }, { timestamps: false });

  ActivityType.associate = function(models) {
    ActivityType.hasOne(models.Activity, { foreignKey: 'typeId', allowNull: false });
  };

  return ActivityType;
};