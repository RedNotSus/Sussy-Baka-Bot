const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "tweet",
  description: "Make Biden tweet anything!",
  usage: "tweet <text>",
  run: async (client, message, args) => {
    if (!args[0]) return message.reply("Please provide text!");

    let embed = new EmbedBuilder()
      .setTitle("Alert! Biden tweeted something!")
      .setImage(`https://api.popcat.xyz/biden?text=${args.join("+")}`)
      .setColor("Random");

    message.channel.send({
      embeds: [embed]
    });
  }
}

