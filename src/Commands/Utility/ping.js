const discord = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  category: "Utility",
  usage: "ping",
  description: "Get the bot's ping!",
  run: async (client, message, args) => {

    let start = Date.now();

    let pingEmbed = new discord.EmbedBuilder()
      .setDescription("Looks like the bot is slow.")
      .setColor("Red");

    message.channel.send({ embeds: [pingEmbed] }).then(m => {

      let end = Date.now();

      let embed = new discord.EmbedBuilder()
        .setAuthor({ name: "Ping!", iconURL: message.author.avatarURL() })
        .addFields({ name: "API Latency", value: Math.round(client.ws.ping) + "ms", inline: true })
        .addFields({ name: "Message Latency", value: end - start + "ms", inline: true })
        .addFields({ name: "Database", value: "`🟢  Connected`" })
        .setColor("#b89653");
      m.edit({ embeds: [embed] }).catch(e => message.channel.send(e));

    });

  }
};