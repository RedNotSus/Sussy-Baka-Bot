const Discord = require('discord.js')
module.exports = {
  name: "botinfo",
  description: "Bots informational page",
  aliases: ["infobot"],
  run: async (client, message, args) => {
  let joinMessageEmbed = new Discord.MessageEmbed()
    .setTitle("Bot Info")
    .setURL("https://discord.gg/Snyb6YWErN")
    .addField(`Stuff`, `Prefix: -\nCommand Count: ${client.commands.size}\nServer Count: ${client.guilds.cache.size}\nStatus: Playing\nVersion: 2.0.4`, true)
    .addField('Important links','[Invite](https://discord.com/oauth2/authorize?client_id=949114925756862544&permissions=8&scope=bot)\n[Support Server](https://discord.gg/Snyb6YWErN)\n[Community Server](https://discord.com/invite/3ZwP8a6dz3)\n[DBL](https://discordbotlist.com/bots/sussy-baka/upvote)\n[Top.gg](https://top.gg/bot/949114925756862544)', true)
    .addField('Ping', 'Latency: \nApi Latency: \nDatabase: `🟢  Connected`', true)
    .addField('Uptime', `Account Created: <t:1646346341:R>\nCode Created: <t:1647120978:R> `, true)
    .addField('Staff', "Programming: Red not sus™#3675", true)
    .setFooter({ text: "¯\_(ツ)_/¯" })
    .setColor()
    .setTimestamp()
  message.channel.send({ embeds: [joinMessageEmbed] });
  },
};

