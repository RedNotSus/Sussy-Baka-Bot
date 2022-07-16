const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "tweet",
  description: "Make Biden tweet anything!",
  usage: "tweet <text>",
  run: async(client, message, args) => {
    if (!args[0]) return message.reply("Please provide text!");

  let embed = new MessageEmbed()
  .setTitle("Alert! Biden tweeted something!")
  .setImage(`https://api.popcat.xyz/biden?text=${args.join("+")}`) 
  .setColor("RANDOM");

  message.channel.send({
    embeds: [embed]
  });
  }
}

