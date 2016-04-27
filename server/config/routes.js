<<<<<<< HEAD
var users = require('./../controllers/users.js'); 
var reviews = require('./../controllers/reviews.js');  
var passport = require('passport');

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.render("index");
	})

	app.get("/auth/facebook", passport.authenticate("facebook"));

	app.get("/auth/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/" }), function(req, res) {
		res.render("success", { user: req.session.passport.user });
	});

	app.get("/auth/google", passport.authenticate("google", { scope: "https://www.googleapis.com/auth/plus.login" }));

	app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }), function(req, res) {
		// res.render("success", { user: req.session.passport.user });
		res.json(json_data);
		// res.sendfile('../../client/partials/profile.html')
	});
}


=======
var Users = require('./../controllers/users.js'); 
var Reviews = require('./../controllers/reviews.js'); 
var Messages = require('./../controllers/messages.js');  
var services = require('./../controllers/services.js');  
var categories = require('./../controllers/categories.js');  
  module.exports = function(app){
    app.get('/login', function(req, res) {
              // res.render('index.ejs'); // load the index.ejs file 
    });
    // app.post('/signup', passport.authenticate('local-signup', {
    //     successRedirect : '/profile', // redirect to the secure profile section
    //     failureRedirect : '/signup', // redirect back to the signup page if there is an error
    //     failureFlash : true // allow flash messages
    // }));
    app.get('/signup', function(req, res) {
      console.log('signup get');
        // render the page and pass in any flash data if it exists
        // res.render('signup.ejs', { message: req.flash('signupMessage') });
    });
    app.get('/services', function(req, res){
      services.index(req, res);
    });
    app.post('/services', function(req, res){
      services.create(req, res);
    });
    app.get('/services/:id', function(req, res){
      services.find(req, res);
    });
    app.get('/categories', function(req, res){
      categories.index(req, res);
    });
    app.get('/users/:name', function(req, res) {
    Users.findOne(req, res);
    })

    app.post('/users/new', function(req, res) {
    Users.new(req, res);
    })

    app.get('/users', function(req, res) {
    Users.index(req, res);
    })

    app.put('/users/edit/:name', function(req, res) {
    Users.edit(req, res);
    })

    app.get('/message/:name', function(req, res) {
    Messages.findOne(req, res);
    })

    app.post('/message/new', function(req, res) {
    Messages.new(req, res);
    })

    app.get('/messages', function(req, res) {
    Messages.index(req, res);
    })

    app.get('/review/:name', function(req, res) {
    Reviews.findOne(req, res);
    })

    app.post('/review/new', function(req, res) {
    Reviews.new(req, res);
    })

    app.get('/reviews', function(req, res) {
    Reviews.index(req, res);
    })
  };
>>>>>>> origin/master
