const Discord = require('discord.js')
module.exports = {
  name: "snipe",
  description: "shows the latest deleted message.",
  run: async (client, message, args) => {
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("Theres nothing to be sniped!")

    const embed = new Discord.MessageEmbed()
     .setTitle("Sniped Content")
     .addField('Sniped in:', `<#${message.channel.id}>`)
      .addField(' Message By:', `<@${msg.author}>`)
      .addField('Sniped Content:', `\`\`\`\n${msg.content}\`\`\``)
     .setColor("#8600ff")
     .setTimestamp()
     .setFooter({text: `Requested by: ${message.author.username}`, iconURL: message.author.displayAvatarURL()})

    if(msg.image) embed.setImage(msg.image)
    message.channel.send( { embeds: [embed] } )
  }
}