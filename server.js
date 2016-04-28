var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require('morgan');
var flash    = require('connect-flash');
var session      = require('express-session');
var bodyParser = require('body-parser'); 
var cookieParser = require('cookie-parser');
var passport = require('passport');
var app = express();

app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console
app.use(session({ secret: 'ilovescotchscotchyscotchscotch', resave: true,
   saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/mongoose.js');
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname + "/client")));
app.use(bodyParser.urlencoded({
	extended: true
}));
// database configuration
require("./server/config/mongoose.js");
// routing
require("./server/config/routes.js")(app);
app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});


