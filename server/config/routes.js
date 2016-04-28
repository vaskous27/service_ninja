var Users = require('./../controllers/users.js'); 
var Reviews = require('./../controllers/reviews.js'); 
var Messages = require('./../controllers/messages.js');  
var services = require('./../controllers/services.js');  
var categories = require('./../controllers/categories.js');
var passport = require('passport');
var bcrypt = require('bcrypt');
var User = require('./../models/user.js');
// require('./passport')(passport);

  module.exports = function(app){
     
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

    app.post('/users/new', function(req, res) {
        console.log(req.body, "In routes new_user")
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

    app.get('/users/:id', function(req, res) {
    Users.findOne(req, res);
    })

    app.put('/users/edit/:id', function(req, res) {
    Users.edit(req, res);
    })

    app.post('/messages', function(req, res) {
    Messages.create(req, res);
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

    app.post('/register', function(req, res, next) {
      console.log('did a register route', req.body);
      passport.authenticate('local-register', function(err, user, info) {
        if (err) {
          return res.status(401).json(info); 
        }
        if (!user) {
          return res.status(401).json(info);
        } 
        return res.json(info);
      })(req, res, next);
    });

    app.post('/login', function(req, res, next) {
      passport.authenticate('local-login', function(err, user, info) {
        if (err) {
          return res.status(401).json(info); 
        }
        if (!user) {
          return res.status(401).json(info);
        }
        req.logIn(user, function(loginErr) {
          if (loginErr) { return next(loginErr); }
          console.log('success')
          return res.json(user);
        });    
      })(req, res, next);
    });

    app.get('/profile', isLoggedIn, function(req, res){
      User.findOne({_id: req.user._id})
        .select('_id name local.email')
        .exec(function(err, user){
          if(err) console.log(err);
          res.json(user)
      })
    })

    app.get('/logout', function(req, res){
      req.logout();
      res.json(true);
    });

    //middleware to check if we're logged in
    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated()){
          return next();
        }
        else{
          console.log('unauthorized access attempt!');
          // if they aren't redirect them to the home page
          res.redirect('/');
        }
    
}

  };
