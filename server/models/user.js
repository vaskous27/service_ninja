var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
 
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/
 
// set up a mongoose model
var UserSchema = new mongoose.Schema({
    authId: Number,
    name: String,
    provider: String,
    json_info: Object
});
 
module.exports = mongoose.model('User', UserSchema);