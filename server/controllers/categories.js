var mongoose = require('mongoose');
var Category = mongoose.model('Category');
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Category.find({}, function(err, results) {
        if(err){
            console.log(err);
        }
        else{
            res.json(results);
        }
      })
    }
  }
})();