/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var mentee = require('../models')["mentees.js"];

mentees.sync();

router.get('/mentees', function(req,res) {
	mentee.selectAll(function(data){	
		console.log();
		res.render('index', {mentees: data});
	});

});

router.post('/mentees/create', function(req,res) {

	var newMentee = {
		nameLast: req.body.nameFirst,
		nameLast: req.body.nameLast,
		email: req.body.email,
		githubLink: req.body.githubLink,
		photoLink: req.photoLink,
		userWebLink: req.body.userWeblink
	}
	mentee.create(newMentee, function(data){
		res.redirect('/mentees');
	});

});



module.exports = router;
