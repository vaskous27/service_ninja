var mongoose = require('mongoose');
var User = mongoose.model('User');
var Review = mongoose.model('Review');
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    // index: function(req, res) {
    //   Friend.find({}, function(err, results) {
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.json(results);
    //     }
    //   })
    // },

    // post: function(req, res) {
    // 	Friend.create(req.body, function(err, results) {
    // 		if(err) {
    // 			console.log(err);
    // 		}
    // 		else {
    // 			res.json(results);
    // 		}
    // 	})
    // },

    // remove: function(req, res, id) {
    // 	Friend.remove({_id: id}, function(err) {
    // 		if(err) {
    // 			res.send(err);
    // 		}
    // 		else {
    // 			Friend.find({}, function(err, friends) {
    // 				if (err) {
    // 					console.log(err);
    // 				}
    // 				else{
    // 					res.json(friends);
    // 				}
    // 			})
    // 		}
    // 	})
    // }
  }
})();