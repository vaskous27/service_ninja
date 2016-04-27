var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
 
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/
 
// set up a mongoose model
var UserSchema = new mongoose.Schema({

    authId: Number,
    name: String,
    provider: String,
    json_info: Object,

  name: String,
  founder: String,
  description: String,
  skills: String,
  location: String,
  url: String,
  categories: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
  local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});
 
module.exports = mongoose.model('User', UserSchema);