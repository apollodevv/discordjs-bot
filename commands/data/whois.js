module.exports = {
    name: "whois",
    description: "Gets data information about someone.",
    execute(message) {
        const Discord = require("discord.js");

        const whois = new Discord.MessageEmbed()
    .setColor('#fff')
    .setAuthor(`${message.author.tag}`)
    .setDescription('---')
    .addFields(
        { name: '', value: ''}
    )
    .setTimestamp()
    .setFooter('hi');

message.channel.send(whois)
    }
};