'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mentees = sequelize.define('Mentees', {
    nameFirst: DataTypes.STRING,
    nameLast: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING(40),
    githubLink: DataTypes.STRING,
    photoLink: DataTypes.STRING,
    userWebLink: DataTypes.STRING,
    mentorID: DataTypes.INTEGER,
    skillSetRequested: DataTypes.STRING  
  }, 
  {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Mentees.belongsTo(models.Mentors, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        });
      }
    }
  });
  return Mentees;
};