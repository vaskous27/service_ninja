var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ServiceSchema = new mongoose.Schema({
  title: String,
  skills: String,
  description: String,
  category: String,
  created_at:  {type: Date, default: Date.now},
  status: String,
  location: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});
var Service = mongoose.model('Service', ServiceSchema);
