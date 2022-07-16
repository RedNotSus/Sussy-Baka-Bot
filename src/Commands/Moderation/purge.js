const Discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix, fail, success) => {
  let noUserPerms = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**You are missing \`MANAGE_MESSAGES\` permission.**`)

  let noBotPerms = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**I am missing \`MANAGE_MESSAGES\` permission.**`)
  
  let noAmount = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**You need to provide an amount to purge.** smh`)

  let notValid = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**That\'s not a valid number.**`)

  let noLimit = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**The number must be more than 0 or less than 100.**`)
  
  let amount = args[0]

  if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
    return message.channel.send({ embeds: [noBotPerms] })
  }
  
  if(message.member.permissions.has("MANAGE_MESSAGES")) {
    if(!amount) {
      return message.channel.send({ embeds: [noAmount] })
    } else {
      if(isNaN(amount)) {
        return message.channel.send({ embeds: [notValid] })
      } else {
        if(amount < 1 || amount > 99) {
          return message.channel.send({ embeds: [noLimit] })
        } else {
          message.channel.bulkDelete(Number(amount) + 1)
        }
      }
    }
  } else {
    message.channel.send({ embeds: [noUserPerms] })
  }
    message.delete()
}

exports.name = "purge"