const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let report = args.join(" ")
  if(!report) return message.channel.send({content: "You have to provide something to Suggest!"})

  console.log(`--------------New Suggestion---------------`)
  console.log(` `)
  console.log(`Suggested By <@${message.author.id}>`)
  console.log(`Suggestion: ${report}`)
  console.log(`----More Info Of User Who Suggested-----`)
  console.log(`Suggester Id: <@${message.author.id}>`)
  console.log(`Suggester Tag: <@${message.author.tag}>`)
  console.log(`Suggester Username: @${message.author.username}`)
  console.log(`Suggested In: ${message.guild.name}`)
  console.log(`-----------------END-------------------`)

    const embed = new Discord.MessageEmbed()
    .setTitle("New Suggestion")
    .setColor("RED")
    .setDescription(`I Got A New Suggestion,\n And Here It Is!`)
    .addField(`Suggested By`, `${message.author.tag}`)
    .addField(`Suggestion:`, `${report}`)
    .addField(`\n Heres More Information Of The User`, ` **Id:** ${message.author.id} \n **Tag:** ${message.author.tag} \n **Username:** ${message.author.username} \n **Suggested Server:** ${message.guild.name}`)
    .setTimestamp()
    .setFooter("Suggested ", client.user.avatarURL())
const reportChannel = client.channels.cache.get('955262512436224060')
  reportChannel.send({embeds : [embed]})
  
  message.channel.send("Succesfully Submited you Suggestion!")

}

module.exports.name = "suggest"