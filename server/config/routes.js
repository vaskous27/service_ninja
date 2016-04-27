var Users = require('./../controllers/users.js'); 
var Reviews = require('./../controllers/reviews.js'); 
var Messages = require('./../controllers/messages.js');  
var services = require('./../controllers/services.js');  
var categories = require('./../controllers/categories.js');  
  module.exports = function(app){
    app.get('/login', function(req, res) { 
    });
    app.get('/signup', function(req, res) {
      console.log('signup get');
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
