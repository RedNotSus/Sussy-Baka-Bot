const Discord = require('discord.js'); // Import the discord.js module
module.exports = {
  name: "botinfo",
  description: "Bots informational page",
  aliases: ["infobot"],
  run: async (client, message, args) => {
    let joinEmbedBuilder = new Discord.EmbedBuilder()
      .setTitle("Bot Info")
      .setURL("https://discord.gg/Snyb6YWErN")
      .addFields({ name: `Stuff`, value: `Prefix: -\nCommand Count: ${client.commands.size}\nServer Count: ${client.guilds.cache.size}\nStatus: Playing\nVersion: 2.0.4`, inline: true })
      .addFields({ name: 'Important links', value: '[Invite](https://discord.com/oauth2/authorize?client_id=949114925756862544&permissions=8&scope=bot)\n[Support Server](https://discord.gg/Snyb6YWErN)\n[Community Server](https://discord.com/invite/3ZwP8a6dz3)\n[DBL](https://discordbotlist.com/bots/sussy-baka/upvote)\n[Top.gg](https://top.gg/bot/949114925756862544)', inline: true })
      .addFields({ name: 'Ping', value: 'Latency: \nApi Latency: \nDatabase: `🟢  Connected`', inline: true })
      .addFields({ name: 'Uptime', value: `Account Created: <t:1646346341:R>\nCode Created: <t:1647120978:R> `, inline: true })
      .addFields({ name: 'Staff', value: "Programming: Red not sus™#3675", inline: true })
      .setFooter({ text: "¯\_(ツ)_/¯" })
      .setTimestamp();
    message.channel.send({ embeds: [joinEmbedBuilder] });
  },
};

