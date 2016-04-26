var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  name: String,
  founder: String,
  description: String,
  logline: String,
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

// methods ======================
// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var User = mongoose.model('User', UserSchema);
