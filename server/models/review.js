var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: String,
  _service: {type: Schema.Types.ObjectId, ref: 'Service'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});
var Review = mongoose.model('Review', ReviewSchema);