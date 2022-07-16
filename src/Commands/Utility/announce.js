const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'announce',
  run: async (client, message, args) => {

if (!message.member.permissions.has("ADMINISTRATOR")) {
return message.reply("You dont have the permissions to use this Command!")
}

const content = args.join(" ");
const channel = message.guild.channels.cache.find(c => c.id === "954173447242649670");

const announceEmbed = new MessageEmbed()
.setTitle('**Announcement!**')
.setDescription(`${content}`)
.setTimestamp()
message.channel.send({ embeds : [announceEmbed]});
 }
}