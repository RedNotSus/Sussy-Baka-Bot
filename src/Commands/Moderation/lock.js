const Discord = require("discord.js")
module.exports.run = (client, message, args) =>{ 
if(!message.member.permissions.has('MANAGE_CHANNELS')) {
 const lockchannelError = new Discord.MessageEmbed()
 .setDescription("You don't have permission to lock channels!")
 .setColor("RANDOM")

message.channel.send({embeds :[lockchannelError]});
 }

 let channel = message.mentions.channels.first();
 let reason = args.join(" ") || 'Not Specified'

 if(channel) {
 reason = args.join(" ").slice(22) || 'Not Specified'
 } else (
 channel = message.channel
 )

 if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false) {
 const lockchannelError2 = new Discord.MessageEmbed()
 .setDescription(`${channel} is already locked!`)
 .setColor("RANDOM")

 message.channel.send({embeds :[lockchannelError2]});
 }

 channel.permissionOverwrites.create
(message.guild.id, { SEND_MESSAGES: false })

const embed = new Discord.MessageEmbed()
 .setTitle(`Channel Locked!`)
 .setDescription(`**Channel:** ${channel} \n **Reason:** ${reason}`)
 .setColor("RANDOM")
 message.channel.send({embeds :[embed]});
}
exports.name = "lock"