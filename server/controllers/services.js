var mongoose = require('mongoose');
var Service = mongoose.model('Service');
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Service.find({}, function(err, results) {
        if(err){
            console.log(err);
        }
        else{
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
    find: function(req, res){
         Service.findOne({_id: req.params.id}, function(err, results){
             if(err) {
                 console.log(err);
               } else {
                 res.json(results);
               }
         })
    }
  }
})();