var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var User = mongoose.model('User');
module.exports = (function() {
  return {

  new: function(req, res){
                    Review.create(req.body, function(err, results) {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            res.json(results);
                        }
                    })
            },

    index: function(req, res){
				Review.find({}, function(err, data){
					if(err) {
						console.log(err);
					}
					else {
				    res.json(data);
					}
				})
	    },


    findOne: function(req, res){
                Review.findOne({name: req.params.name}, function(err, data){
                    if(err) {
                        console.log(err);
                    }
                    else {
                    res.json(data);
                    }
                })
        }


  }
})();