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
        skillLevel1: 2, 
        skillSet2:'mern',
        skillLevel2: 1, 
        bio:'Hi, I\'m Betty and I\'ve been coding since I was three.',
        userWebLink:'http://mybettyweb.com',
        mentorRating:3,
        photoLink: 'public/images/fakefemale1.png'

      },
      {
        nameFirst: 'Cecile',
        nameLast: 'Diakonova',
        email: 'cjd@coderevolution.com',
        password: sha1('password'),
        githubLink: 'http://github.com/diakonova',
        skillSet1: 'mern',
        skillLevel1: 3,        
        bio:'Fully versed in both LAMP and MERN stacks.',
        userWebLink:'http://comecodewithme.code',
        mentorRating:3,
        photoLink: 'public/images/fakefemale2.png'
      },
      {
        nameFirst: 'Taylor',
        nameLast: 'Jackson',
        email: 'taylor@coderevolution.com',
        password: sha1('password'),
        githubLink: 'http://github.com/djackson',
        skillSet1: 'mean',
        skillLevel1: 3,        
        bio:'I have been a developer for ten years. I am passionate about learning new technologies.',
        userWebLink:'http://comecodewithme.code',
        mentorRating:3,
        photoLink: 'public/images/taylor.jpeg'
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
