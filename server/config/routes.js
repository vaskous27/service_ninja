
var users = require('./../controllers/users.js'); 
var reviews = require('./../controllers/reviews.js');  


  module.exports = function(app, passport) {
  	app.get('/login', function(req, res) {
  		        // res.render('index.ejs'); // load the index.ejs file

       
    });

  	app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

  	app.get('/signup', function(req, res) {
  		console.log('signup get');
        // render the page and pass in any flash data if it exists
        // res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

  };