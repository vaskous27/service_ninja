var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
// set up a mongoose model
var UserSchema = new mongoose.Schema({

    authId: Number,
    name: String,
    provider: String,
    json_info: Object,

  name: String,
  description: String,
  logline: String,
  skills: String,
  location: String,
  url: String,
  categories: [String],
  founder_first: String,
  founder_last: String,
  founder_photo: String,
  logo: String,
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