var users = require('./../controllers/users.js'); 
var reviews = require('./../controllers/reviews.js');  
var passport = require('passport');

module.exports = function(app) {

	app.get("/", function(req, res) {
		res.render("index");
	})

	app.get("/auth/facebook", passport.authenticate("facebook"));

	app.get("/auth/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/" }), function(req, res) {
		res.render("success", { user: req.session.passport.user });
	});

	app.get("/auth/google", passport.authenticate("google", { scope: "https://www.googleapis.com/auth/plus.login" }));

	app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }), function(req, res) {
		res.render("profile", { user: req.session.passport.user });
		// res.json(json_data);
		// res.sendfile('../../client/partials/profile.html')
	});
}


