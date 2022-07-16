const moment = require ("moment")
const Discord = require ("discord.js")

module.exports.run = async(client, message, args) =>{
  let user = message.mentions.members.first() || message.member
  let avatar = user.displayAvatarURL ({size: 4096, dynamic: true});
  let embed = new Discord.MessageEmbed()
  .setTitle("Who Is That?")
  .setColor("RANDOM")
  .addField(`${user.user.tag}`, `${user}`, true)
  .addField("ID:", `${user.id}`, true)
  .addField("Nickname:", `${user.displayName}`, true)
  .addField("Joined The Server On:", `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
  .addField("Account Created On:", `${moment.utc(user.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField('Roles:', user.roles.cache ? user.roles.cache.map(r => `${r}`).join(' | ') : "", true)
  .setFooter(`Idk what to put here`)

  message.channel.send( { embeds : [ embed ] } )

}
module.exports.name = `userinfo`