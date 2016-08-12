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

var Mentees = sequelize.define('Mentees', {
    nameFirst: Sequelize.STRING,
    nameLast: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING(40),
    githubLink: Sequelize.STRING,
    photoLink: Sequelize.STRING,
    mentorID: Sequelize.INTEGER,
    skillSetRequested: Sequelize.STRING     
},{
  timestamps: false,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Mentees.belongsTo(models.Mentors, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  
module.exports = Mentees;