var mongoose = require('mongoose');
var User = mongoose.model('User');
var Message = mongoose.model('Message');
var ObjectID = require('mongoose').Types.ObjectId;
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
        console.log(req.params.id)
               var id = new ObjectID(req.params.id);
				Message.find({_recipient: id})
                .populate('_user')
                .exec(function(err, results){
                if(err) {
                     console.log(err);
                   } else {
                    console.log(results);
                     res.json(results);
                   }
              })
            },


    findOne: function(req, res){
                var id = new ObjectID(req.params.id);
                Message.findOne({_id: id})
                .populate('_user')
                .exec(function(err, results){
                if(err) {
                     console.log(err);
                   } else {
                    console.log(results);
                     res.json(results);
                   }
              })
            },
        }
})();