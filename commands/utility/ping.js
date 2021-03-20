module.exports = {
    name: "ping",
    description: "Gets bot connection.",
    execute(message) {
       message.channel.send('Pinging..').then(sent => {
           sent.edit(`Ping: ${sent.createdTimestamp - message.createdTimestamp}ms`)
       })
    }
};