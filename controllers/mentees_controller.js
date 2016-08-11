
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mentees = require('../webmodels/mentees');
var mentors = require('../webmodels/mentors');
mentees.sync();

router.get('/mentees', function(req,res) {
	var findMentees = mentees.findAll({attributes:['nameFirst']});//sequelize findAll or findById
	findMentees.then(function(data){ //then is the built in function of a promise - sequelize has promises	
		console.log();
		//res.render('index', {mentees: data});
		res.send(data);
	});
});

router.get('/mentorsMatching/:skillSetRequested', function(req,res) {
	var lookupMentors = mentors.findAll({
		attributes:['nameFirst', 'nameLast', 'photoLink', 'githubLink','bio','userWebLink'],
		where: {
			$or: [{skillSet1: req.params.skillSetRequested}, {skillSet2: req.params.skillSetRequested}],
			menteeID: null 
		}
	});
	lookupMentors.then(function(data){
	 //then is the built in function of a promise - sequelize has promises	
		var hbsObject = {returnedMentors : data};
		res.render('mentormatch', hbsObject);		

		/*newMentee.mentorID = data[0].id; //from existing mentor database
		*/
	});	
	/*var requestedMentor = req.params.matchedMentorID;
	console.log('winning!');
	var foundMentors = mentors.findAll({//sequelize query returning a promise
		where: {
			id: requestedMentor
		},
		attributes: ['nameFirst', 'nameLast', 'photoLink', 'githubLink','bio','userWebLink']
	});//sequelize find just the mentor */	
});

router.post('/mentees/create', function(req,res) {
	var newMentee = { //from webform
		nameFirst: req.body.nameFirst,
		nameLast: req.body.nameLast,
		password: req.body.password, //don't know if this is correct
		email: req.body.email,
		githubLink: req.body.githubLink,
		photoLink: req.photoLink,
		userWebLink: req.body.userWeblink,
		skillSetRequested:req.body.skillSetRequested
	}
	var menteeReturnMentors = mentees.create(newMentee);
		menteeReturnMentors.then(function(data){
			res.redirect('/mentorsMatching/' + req.body.skillSetRequested);
		})
});

module.exports = router;
