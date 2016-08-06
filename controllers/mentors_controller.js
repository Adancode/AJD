/*
This creates all the functions that will do the routing for the app as well as the logic of each route.
*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mentors = require('../models')["mentors"];

mentors.sync();

router.get('/mentors', function(req,res) {
	mentor.selectAll(function(data){	
		console.log();
		res.render('index', {mentors: data});
	});

});

router.post('/mentors/create', function(req,res) {
	
	var newMentor = {
		nameFirst: req.body.nameFirst,
		nameLast: req.body.nameLast,
		email: req.body.email,
		githubLink: req.body.githubLink,
		skillSet1: req.body.skillSet1,
		skillSet2: req.body.skillSet2,
		skillSet3: req.body.skillSet3,
		bio: req.body.bio,
		userWebLink: req.body.userWebLink,
		mentorRating: req.body.mentorRating
	}
	
	mentor.create(newMentor, function(data){
		res.redirect('/mentors');
	});

});



module.exports = router;
