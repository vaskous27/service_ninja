var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategorySchema = new mongoose.Schema({
  title: String
});
var Category = mongoose.model('Category', CategorySchema);