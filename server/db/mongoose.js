const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
	process.env.MONGODB_URI ||
		'mongodb://heroku_lrws61mq:3cuspl83sfd5qtrvrrlch7quog@ds251240.mlab.com:51240/heroku_lrws61mq',
	{ useNewUrlParser: true }
);

module.exports = { mongoose };
