
var Users = require('./../controllers/users.js'); 
var Reviews = require('./../controllers/reviews.js'); 
var Messages = require('./../controllers/messages.js');  



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

      app.post('/users/new', function(req, res) {
        console.log(req.body, "In routes new_user")
    Users.new(req, res);
    })

    app.get('/users', function(req, res) {
    Users.index(req, res);
    })

    app.get('/users/:id', function(req, res) {
    Users.findOne(req, res);
    })

    app.put('/users/edit/:id', function(req, res) {
    Users.edit(req, res);
    })

    app.post('/message/new', function(req, res) {
    Messages.new(req, res);
    })

      app.get('/messages', function(req, res) {
    Messages.index(req, res);
    })

    app.get('/message/:name', function(req, res) {
    Messages.findOne(req, res);
    })

    app.post('/review/new', function(req, res) {
    Reviews.new(req, res);
    })

    app.get('/reviews', function(req, res) {
    Reviews.index(req, res);
    })

    app.get('/review/:name', function(req, res) {
    Reviews.findOne(req, res);
    })

    
  };




