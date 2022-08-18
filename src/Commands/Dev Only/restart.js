const Discord = require("discord.js");
const exec = require("child_process").exec;
module.exports = {
  name: "restart",
  description: "Restarts the bot",
  aliases: "",

  run: async (client, message, args) => {
    const authorid = message.author.id;
    if (authorid !== "735641273477890178") return message.reply('This is only for developers!');

    const embed = new Discord.EmbedBuilder()
      .setTitle("Restarting...")
      .setDescription("The bot is currently restarting...")
      .setFooter({ text: "This will take 10 seconds.." })
      .setColor([255, 77, 77])
      .setThumbnail(message.author.displayAvatarURL());

    const embed1 = new Discord.EmbedBuilder()
      .setTitle("Success!")
      .setDescription("The bot has restarted!")
      .setFooter({ text: "This will take 5 seconds.." })
      .setColor([255, 77, 77])
      .setThumbnail(message.author.displayAvatarURL());

    message.channel.send({ embeds: [embed] }).then(m => {
      setTimeout(() => {
        exec("pkill -f -SIGHUP nodemon");
        m.edit({ embeds: [embed1] });
      }, 10500);
    });
  }
};