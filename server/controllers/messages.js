var mongoose = require('mongoose');
var User = mongoose.model('User');
var Message = mongoose.model('Message');
module.exports = (function() {
  return {

  	create: function(req, res){
                    Message.create(req.body, function(err, results) {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            res.json(results);
                        }
                    })
            },

    index: function(req, res){
				Message.find({}, function(err, data){
					if(err) {
						console.log(err);
					}
					else {
				    res.json(data);
					}
				})
	    },


    findOne: function(req, res){
                Message.findOne({name: req.params.name}, function(err, data){
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