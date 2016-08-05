/*global NULL*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mentors = sequelize.define('Mentors', {
    nameFirst: DataTypes.STRING,
    nameLast: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING(40),
    githubLink: DataTypes.STRING,
    photoLink: DataTypes.STRING,
    skillSet1: DataTypes.STRING,
    skillSet2: DataTypes.STRING,
    skillSet3: DataTypes.STRING,
    bio: DataTypes.STRING(164),
    userWebLink: DataTypes.STRING,
    mentorRating: DataTypes.INTEGER,
    menteeID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mentors;
};