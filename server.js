var express = require('express');
var path = require('path');
var morgan = require('morgan');
var flash    = require('connect-flash');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var bodyParser = require('body-parser'); 

var app = express();
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({ secret: 'ilovescotchscotchyscotchscotch', resave: true,
    saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app, passport);
require('./server/config/passport')(passport); // pass passport for configuration

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});

