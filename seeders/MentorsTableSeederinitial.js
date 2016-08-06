/*global NULL*/
'use strict';
var sha1 = require('sha1');
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Mentors', [{
        nameFirst: 'Betty',
        nameLast: 'Coder',
        email: 'betty@coderevolution.com',
        password: sha1('password'),
        githubLink: 'http://github.com/bettyc',
        skillSet1:'mean',
        skillSet2:'mern',
        bio:'Hi, I\'m Betty and I\'ve been coding since I was three.',
        userWebLink:'http://mybettyweb.com',
        mentorRating:3

      },
      {
        nameFirst: 'Cecile',
        nameLast: 'Diakonova',
        email: 'cjd@coderevolution.com',
        password: sha1('password'),
        githubLink: 'http://github.com/diakonova',
        skillSet1:'lamp',
        skillSet2:'mern',
        bio:'Fully versed in both LAMP and MERN stacks.',
        userWebLink:'http://comecodewithme.code',
        mentorRating:3
      
      }
      ], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Mentors', null, {});
  }
};
