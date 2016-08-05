/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');



router.get('/', function(req,res) {
	res.render('home');
});

module.exports = router;