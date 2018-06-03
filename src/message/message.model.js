const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
	text: {type: String, maxlength: 82},
	author: Object,
	media: {type: String, default: "text"},
});

messageSchema.pre('save', function (next) {
	next();
})

module.exports = mongoose.model('Message', messageSchema);
