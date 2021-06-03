'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {

    description: DataTypes.STRING,

    activityDate: DataTypes.DATE,

  }, {});

  Activity.associate = function(models) {
    Activity.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'cascade', allowNull: false });
    Activity.belongsTo(models.ActivityType, { foreignKey: 'typeId', allowNull: false });
  };

  return Activity;
};