const Discord = require('discord.js');

module.exports = {
  name: "unlock",
  description: "Unlocks a channel",
  permissions: ["MANAGE_CHANNELS"],
  aliases: ["ul"],
  category: "Moderation",  

  run: async ( client, message, args ) => {
const commands = client.commands.map(command => command.name).join(", ")
if(!message.member.permissions.has('MANAGE_CHANNELS')) {
 const unlockchannelError = new Discord.MessageEmbed()
.setTitle("Error!")   
.setDescription('You don\'t have permission to unlock channels!')
.setColor("RED")
 return message.channel.send({embeds: [unlockchannelError]})
 }
const channel = message.channel
  
if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
 const unlockchannelError2 = new Discord.MessageEmbed()
 .setDescription(`${channel} is already unlocked!`)
 .setColor("RED")
 return message.channel.send({embeds: [unlockchannelError2]})
 }
channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true })
const embed = new Discord.MessageEmbed()
.setTitle(`Channel Unlocked!`)
.setDescription(`${channel} has been unlocked!`)
.setColor("GREEN")

 message.channel.send({embeds: [embed]})
    }
};