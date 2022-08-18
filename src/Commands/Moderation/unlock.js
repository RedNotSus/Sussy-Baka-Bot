const Discord = require('discord.js');

module.exports = {
  name: "unlock",
  description: "Unlocks a channel",
  permissions: ["MANAGE_CHANNELS"],
  aliases: ["ul"],
  category: "Moderation",

  run: async (client, message, args) => {
    const commands = client.commands.map(command => command.name).join(", ");
    if (!message.member.permissions.has('MANAGE_CHANNELS')) {
      const unlockchannelError = new Discord.EmbedBuilder()
        .setTitle("Error!")
        .setDescription('You don\'t have permission to unlock channels!')
        .setColor("Red");
      return message.channel.send({ embeds: [unlockchannelError] });
    }
    const channel = message.channel;

    if (channel.permissionsFor(message.guild.id).has('SendMessages') === true) {
      const unlockchannelError2 = new Discord.EmbedBuilder()
        .setDescription(`${channel} is already unlocked!`)
        .setColor("Red");
      return message.channel.send({ embeds: [unlockchannelError2] });
    }
    channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true });
    const embed = new Discord.EmbedBuilder()
      .setTitle(`Channel Unlocked!`)
      .setDescription(`${channel} has been unlocked!`)
      .setColor("Green");

    message.channel.send({ embeds: [embed] });
  }
};