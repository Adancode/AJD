var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.normalize(path.join(__dirname, 'public'))));
var PORT = process.env.PORT || 8080;//must use this for heroku deployment

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use('/public', express.static('public'));//this works homepage with images peter 
app.use(express.static(path.join(__dirname, 'public'))); //this works for multiple pages when pages are placed in public folder no images peter

var homeController = require('./controllers/home_controller.js');
var menteesController = require('./controllers/mentees_controller.js');
var mentorsController = require('./controllers/mentors_controller.js');

app.use('/', homeController);
app.use('/', menteesController);
app.use('/', mentorsController);

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
})
