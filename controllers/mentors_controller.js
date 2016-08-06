/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mentors = require('../webmodels/mentors');

mentors.sync(); //makes sure the table is there

router.get('/mentors', function(req,res) {
	console.log('winning!');
	var foundMentors = mentors.findAll({attributes:['nameFirst']});//sequelize findAll or findById
	foundMentors.then(function(data){ //then is the built in function of a promise - sequelize has promises	
		console.log();
		//res.render('index', {mentors: data});
		res.send(data);
	});
});


/*router.get('/mentors', function(req,res) {
	mentors.findAll({},function(data){	
		console.log();
		res.render('index', {mentors: data});
	});
});*/

router.post('/mentors/create', function(req,res) {
	
	var newMentor = {
		nameFirst: req.body.nameFirst,
		nameLast: req.body.nameLast,
		email: req.body.email,
		githubLink: req.body.githubLink,
		skillSet1: req.body.skillSet1,
		skillSet2: req.body.skillSet2,
		bio: req.body.bio,
		userWebLink: req.body.userWebLink
	}
	
	mentors.create(newMentor, function(data){//examine if needing the callback outside because of sequelize promise
		res.redirect('/mentors');
	});

});

module.exports = router;
