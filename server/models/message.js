var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
  subject: String,
  content: String,
  _recipient: {type: Schema.Types.ObjectId, ref: 'User'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});
var Review = mongoose.model('Message', MessageSchema);