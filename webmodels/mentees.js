/*global NULL*/
'use strict';
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
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
    mentorID: DataTypes.INTEGER,
    skillSetRequested: DataTypes.STRING    
},{
    underscored: true,
    freezeTableName: true,
    tableName: 'mentees',
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