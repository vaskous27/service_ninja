// this is our friends.js file located at /server/controllers/friends.js
// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Friend.find({}, function(err, results) {
        if(err){
            console.log(err);
        }
        else{
            res.json(results);
        }
      })
    },

    post: function(req, res) {
    	Friend.create(req.body, function(err, results) {
    		if(err) {
    			console.log(err);
    		}
    		else {
    			res.json(results);
    		}
    	})
    },

    remove: function(req, res, id) {
    	Friend.remove({_id: id}, function(err) {
    		if(err) {
    			res.send(err);
    		}
    		else {
    			Friend.find({}, function(err, friends) {
    				if (err) {
    					console.log(err);
    				}
    				else{
    					res.json(friends);
    				}
    			})
    		}
    	})
    }
  }
})();