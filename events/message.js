module.exports = {
	name: 'message',
	execute(message) {
		console.log(`Username: ${message.author.tag}
Sent: ${message.content}`);
	},
};