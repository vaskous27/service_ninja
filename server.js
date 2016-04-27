var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require('morgan');
var flash    = require('connect-flash');
var app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname + "/client")));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set("views", path.join(__dirname + "/client/views"));


// database configuration
require("./server/config/mongoose.js");


// routing
require("./server/config/routes.js")(app);

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});


