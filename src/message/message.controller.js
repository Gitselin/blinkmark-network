let Message = require('./message.model');

module.exports = {
	chat,
	getMessages,
	updateAll,
	deleteAll,
	create,
	getMessage,
	update,
	del
}
//MESSAGE PAGE
function chat(req, res, next){

	res.render('chat');


	/*Messages.find({}, null, {limit: 30}, function (error, posts) {
    if (error) return next(error);
    res.render('messages', {user: req.session.user, messages: messages})
  });*/
};

//GET ALL MESSAGES
function getMessages(req, res, next) {
	Message.find(function (err, posts) {
		if (err) return res.send(err);
		res.json(messages);
	});
}

//UPDATE ALL MESSAGES
function updateAll(req, res, next) {
	res.send('update all');
}

//DELETE ALL MESSAGES
function deleteAll(req, res, next) {
	res.send('delete all');
}

//CREATE MESSAGE
function create(req, res, next) {
	var message = new Message({
		text: req.body.text,
		author: req.session.user
	});

	message.save(function (err, post) {
		if (err) return res.send(err.message);
	});
}

//GET MESSAGE
function getMessage(req, res, next) {
	Message.findById(req.params.id, function (err, message) {
		if (err) return res.send(err);
		res.json(message);
	});
}

//UPDATE POST
function update(req, res, next) {
	Message.findById(req.params.id, function (err, message) {
		if (err) return res.send(err);
		message.text = req.body.text;

		message.save(function (err, post) {
			if (err) res.send(err);
			res.json(message);
		});
	});
}

//DELETE POST
function del(req, res, next) {
	Message.findByIdAndRemove(req.params.id, function (err, message) {
		if (err) res.send(err);
		res.json({message: "removed"});
	});
}
