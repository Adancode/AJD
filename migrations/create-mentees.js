'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Mentees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameFirst: {
        type: Sequelize.STRING
      },
      nameLast: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING(40)
      },
      githubLink: {
        type: Sequelize.STRING
      },
      photoLink: {
        type: Sequelize.STRING
      },
      userWebLink: {
        type: Sequelize.STRING
      },
      mentorID: {
      allowNull: true,
      type: Sequelize.INTEGER
      },
      skillSetRequested: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Mentees');
  }
};