'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Mentors', {
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
      skillSet1: {
        type: Sequelize.STRING
      },
      skillLevel1: {
        type: Sequelize.INTEGER
      },
      skillSet2: {
        type: Sequelize.STRING
      },
      skillLevel2: {
        type: Sequelize.INTEGER
      },
      bio: {
        type: Sequelize.STRING(164)
      }, 
      userWebLink: {
        type: Sequelize.STRING
      },
      mentorRating: {
        type: Sequelize.INTEGER
      },
      menteeID: {
      allowNull: true,
      type: Sequelize.INTEGER
      }   
    },
    {
      timestamps: false
    }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Mentors');
  }
};