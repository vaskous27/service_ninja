var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// set up a mongoose model
var UserSchema = new mongoose.Schema({

  name: String,
  description: String,
  logline: String,
  skills: String,
  location: String,
  url: String,
  img: { data: Buffer, contentType: String },
  categories: [String],
  founder_first: String,
  founder_last: String,
  founder_photo: String,
  logo: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
  local: { email: String, password: String }
});

// hash passwords
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);