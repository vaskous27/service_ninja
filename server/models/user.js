var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  name: String,
  description: String,
  skills: String,
  location: String,
  category: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});
var User = mongoose.model('User', UserSchema);
