var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var FacebookStrategy = require("passport-facebook").Strategy;
var morgan = require('morgan');
<<<<<<< HEAD
=======
var flash    = require('connect-flash');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var bodyParser = require('body-parser'); 
>>>>>>> origin/master

var app = express();
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname + "/client")));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set("views", path.join(__dirname + "/client/partials"));
app.set("view engine", "ejs");

app.use(passport.initialize());
app.use(passport.session());

// passport session setup
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// database configuration
require("./server/config/mongoose.js");

// authentication
require("./server/auth/fb_auth.js");
require("./server/auth/google_auth.js")

<<<<<<< HEAD
// routing
require("./server/config/routes.js")(app);

app.listen(8000, function() {
	console.log("listening on port 8000");
})
=======
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app, passport);
require('./server/config/passport')(passport); // pass passport for configuration

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});

>>>>>>> origin/master
