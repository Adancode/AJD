// DEPENDENCIES
//==================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); // for deletes in express

// MODEL CONTROLLERS IMPORT
//==================================================
var home_controller = require('./controllers/home_controller.js');
var mentees_controller = require('./controllers/mentees_controller');
var mentors_controller = require('./controllers/mentors_controller.js');


// EXPRESS SETUP
//==================================================
var app = express();

//override POST to have DELETE and PUT
app.use(methodOverride('_method'));

//view engine setup
app.set('views', path.join(__dirname, 'views'));

// set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// bodyparsert
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home_controller);
app.use('/mentees', mentees_controller);
app.use('mentors', mentors_controller);

module.exports = app;