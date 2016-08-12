/*global NULL*/
'use strict';
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

var Mentors = sequelize.define('Mentors', {
    nameFirst: Sequelize.STRING,
    nameLast: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING(40),
    githubLink: Sequelize.STRING,
    photoLink: Sequelize.STRING,
    skillSet1: Sequelize.STRING,
    skillLevel1: Sequelize.INTEGER,
    skillSet2: Sequelize.STRING,
    skillLevel2: Sequelize.INTEGER,
    bio: Sequelize.STRING(164),
    userWebLink: Sequelize.STRING,
    mentorRating: Sequelize.INTEGER,
    menteeID: Sequelize.INTEGER
},{
  timestamps: false,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Mentors.belongsTo(models.Mentors, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
});
  
module.exports = Mentors;