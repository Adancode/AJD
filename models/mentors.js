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
    skillLevel1: DataTypes.INTEGER,
    skillSet2: DataTypes.STRING,
    skillLevel2: DataTypes.INTEGER,
    bio: DataTypes.STRING(164),
    userWebLink: DataTypes.STRING,
    mentorRating: DataTypes.INTEGER,
    menteeID: DataTypes.INTEGER
  }, 
  {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        models.Mentees.belongsTo(models.Mentors, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        });
      }
    }
  });
  return Mentors;
};