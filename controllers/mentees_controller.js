
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
	var lookupMentors = mentors.findAll({
		attributes:['nameFirst', 'id'],
		where: {
			$or: [{skillSet1: req.body.skillSetRequested}, {skillSet2: req.body.skillSetRequested}],
			menteeID: null 
		}
	});
	lookupMentors.then(function(data){
		newMentee.mentorID = data[0].id; //from existing mentor database
		var menteeReturnMentors = mentees.create(newMentee);
		menteeReturnMentors.then(function(data){
			res.redirect('/mentees');
		})
	});	
});

module.exports = router;
