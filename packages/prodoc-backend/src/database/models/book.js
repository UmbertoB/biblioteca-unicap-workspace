'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, autoIncrement: true },
    
    title: DataTypes.STRING,

    description: DataTypes.STRING,

    author: DataTypes.STRING,

    rentId: DataTypes.INTEGER,

  }, {});

  Book.associate = function(models) { };

  return Book;
};