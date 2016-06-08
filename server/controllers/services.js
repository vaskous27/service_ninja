var mongoose = require('mongoose');
var Service = mongoose.model('Service');
var ObjectID = require('mongoose').Types.ObjectId;
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Service.find({})
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
    indexUser: function(req, res){
       var id = new ObjectID(req.params.id);
      //this is where i need to populate
      console.log(req.params.id, "Got to indexuser");
      Service.find({_user: id})
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
    create: function(req, res) {
        console.log(req.body);
            Service.create(req.body, function(err, results) {
               if(err) {
                 console.log(err);
               } else {
                 res.json(results);
               }
       })
    },
    remove: function(req, res) {
        console.log(req.params);
           Service.remove({_id: req.params.id}).exec(function(){
            res.json(200);
          });
    },
    find: function(req, res){
         Service.findOne({_id: req.params.id})
      .populate('_user')
      .exec(function(err, results){
        if(err) {
             console.log(err);
           } else {
            console.log(results);
             res.json(results);
           }
      })
    }
  }
})();