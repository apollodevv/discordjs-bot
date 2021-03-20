module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity('sixcord.xyz', { type: 'WATCHING'});
		console.log(`Logged on: ${client.user.tag}`);
	},
};