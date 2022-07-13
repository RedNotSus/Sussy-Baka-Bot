const discord = require("discord.js")
exports.name = "cmm";
exports.run = async (client, message, args) => {

  if (!args[0]) return message.reply("Please provide arguments");

  let embed = new discord.MessageEmbed()
  .setTitle("Change My Mind")
  .setImage(`https://badboy.is-a.dev/api/image/cmm?text=${encodeURI (args.join(" "))}`)
  .setTimestamp()
  .setFooter(message.author.username)
  .setColor("RANDOM");

  message.channel.send({
    embeds: [embed]
  });
};