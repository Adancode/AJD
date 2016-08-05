/*global NULL*/
'use strict';
var sha1 = require('sha1');
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Mentees', [{
        nameFirst: 'Suzanne',
        nameLast: 'Britexta',
        email: 'suz@codebeginner.com',
        password: sha1('password')
      },
      {
        nameFirst: 'Andrew',
        nameLast: 'W.K.',
        email: 'andrew@codeandrewwk.com.com',
        password: sha1('password')
      }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Mentees', null, {});
  }
};
