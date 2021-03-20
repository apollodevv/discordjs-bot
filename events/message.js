module.exports = {
	name: 'message',
	execute(message) {
		console.log(`User: ${message.author.tag}
Sent: ${message.content}`);
	},
};