var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');

router.get('/', function(req,res) {
	res.redirect('/public/index4.html');
});

module.exports = router;