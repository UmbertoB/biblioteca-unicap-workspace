'use strict';
module.exports = (sequelize, DataTypes) => {
  const Degree = sequelize.define('Degree', {

    title: DataTypes.STRING,

    description: DataTypes.STRING,

    issueDate: DataTypes.DATE,

  }, {});

  Degree.associate = function(models) {
    Degree.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'cascade', allowNull: false });
    Degree.belongsTo(models.DegreeType, { foreignKey: 'typeId', allowNull: false });  };

  return Degree;
};