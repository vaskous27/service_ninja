var users = require('./../controllers/users.js');
var services = require('./../controllers/services.js');  
var reviews = require('./../controllers/reviews.js'); 
var categories = require('./../controllers/categories.js');  
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
  };