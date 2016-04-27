var mongoose = require('mongoose');
var User = mongoose.model('User');
var Review = mongoose.model('Review');
module.exports = (function() {
  return {

     new: function(req, res){
                    User.create(req.body, function(err, results) {
                        if(err) {
                            console.log(err);
                        }
                        else {
                            res.json(results);
                        }
                    })
            },

    index: function(req, res){
                User.find({}, function(err, data){
                    if(err) {
                        console.log(err);
                    }
                    else {
                    res.json(data);
                    }
                })
        },


    findOne: function(req, res){
                User.findOne({name: req.params.name}, function(err, data){
                    if(err) {
                        console.log(err);
                    }
                    else {
                    res.json(data);
                    }
                })
        },

    edit: function(req, res) {
                User.update({name: "whatever"}, {$set: {location: "Echo Park"}}, function (err, data) {
                  if (err) {
                    return handleError(err);
                  }
                  res.send(data);
                });
    }


  }
})();