const Discord = require('discord.js');

module.exports = {
  name: "donate",
  description: "donate some stuff",
  usage: "donate [duration] [winners] [prize] [requierments] [message]",
  category: "utility",
  args: true,
  run: async (client, message, args) => {

    const duration = args[0];
    const winners = args[1];
    const prize = args[2];
    const req = args[3];
    const msg = args[4];

    if (!duration)
      return message.reply("Please provide A Duration. Format is [prefix]donate [duration] [winners] [prize] [requierments] [message]");
    if (!winners)
      return message.reply("Please provide winners. Format is [prefix]donate [duration] [winners] [prize] [requierments] [message]");
    if (!prize)
      return message.reply("Please provide a prize. Format is [prefix]donate [duration] [winners] [prize] [requierments] [message]");
    if (!req)
      return message.reply("Please provide requerments. Format is [prefix]donate [duration] [winners] [prize] [requierments] [message]");
    if (!duration)
      return message.reply("Please provide A message. Format is [prefix]donate [duration] [winners] [prize] [requierments] [message]");  // change [prefix] to your bots prefix

    const donateEmbed = new Discord.EmbedBuilder()
      .setTitle(`${message.author.tag} wants to make a donation!`)
      .setDescription(`Donor: <@${message.author.id}>\nDuration: ${duration}\nWinners: ${winners}\nPrize: ${prize}\nRequirements: ${req}\nMessage: ${msg}`)
      .setFooter({ text: 'Made by Rednotsus' })
      .setColor('Random');
    message.delete();
    message.channel.send(`<@PUTIDHERE>, <@${message.author.tag}> wants to donate`);
    message.channel.send({ embeds: [donateEmbed] }); // change PUTIDHERE to the Users id that you want to ping when theres a donation
  }
};