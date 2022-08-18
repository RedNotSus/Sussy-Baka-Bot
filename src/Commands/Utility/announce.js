const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'announce',
  run: async (client, message, args) => {

    if (!message.member.permissions.has("Administrator")) {
      return message.reply("You dont have the permissions to use this Command!");
    }

    const content = args.join(" ");
    if (!content) return message.reply("Please provide text!");

    const announceEmbed = new EmbedBuilder()
      .setTitle('**Announcement!**')
      .setDescription(`${content}`)
      .setTimestamp();
    message.channel.send({ embeds: [announceEmbed] });
  }
};