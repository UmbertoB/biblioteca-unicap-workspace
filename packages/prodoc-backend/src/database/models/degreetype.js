'use strict';
module.exports = (sequelize, DataTypes) => {
  const DegreeType = sequelize.define('DegreeType', {

    title: DataTypes.STRING

  }, { timestamps: false });

  DegreeType.associate = function(models) {
    DegreeType.hasOne(models.Degree, { foreignKey: 'typeId', allowNull: false });
  };

  return DegreeType;
};