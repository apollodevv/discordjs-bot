module.exports = {
    name: "whois",
    description: "Gets user information.",
    execute(message) {
        const Discord = require("discord.js");

        const whois = new Discord.MessageEmbed()
    .setColor('#fff')
    .setAuthor(`${message.author.tag}`)
    .setDescription('')
    .addFields(
        { name: '', value: ''}
    )
    .setTimestamp()
    .setFooter('');

message.channel.send(whois)
    }
};