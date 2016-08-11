
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mentors = require('../webmodels/mentors');

mentors.sync(); //makes sure the table is there

router.get('/mentors', function(req,res) {
	console.log('winning!');
	var foundMentors = mentors.findAll({attributes:['nameFirst', 'nameLast', 'photoLink', 'githubLink','bio','userWebLink']});//sequelize findAll or findById
	foundMentors.then(function(data){ //then is the built in function of a promise - sequelize has promises	
		var hbsObject = {mentors : data};
		res.render('mentors', hbsObject);
	});
});

router.post('/mentors/create', function(req,res) {
	
	var newMentor = {
		nameFirst: req.body.nameFirst,
		nameLast: req.body.nameLast,
		email: req.body.email,
		githubLink: req.body.githubLink,
		photoLink: req.body.photoLink,
		password: req.body.password, //don't know if this is correct
		skillSet1: req.body.skillSet1,
		skillLevel1: req.body.skillLevel1,
		skillSet2: req.body.skillSet2,
		skillLevel2: req.body.skillLevel2,
		bio: req.body.bio,
		userWebLink: req.body.userWebLink
	}
	
	mentors.create(newMentor, function(data){//examine if needing the callback outside because of sequelize promise
		res.redirect('/mentors');
	});
});

module.exports = router;
