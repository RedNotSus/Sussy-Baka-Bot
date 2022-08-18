const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  if (!message.member.permissions.has('MANAGE_CHANNELS')) {
    const lockchannelError = new Discord.EmbedBuilder()
      .setDescription("You don't have permission to lock channels!")
      .setColor("Random");

    message.channel.send({ embeds: [lockchannelError] });
  }

  let channel = message.mentions.channels.first();
  let reason = args.join(" ") || 'Not Specified';

  if (channel) {
    reason = args.join(" ").slice(22) || 'Not Specified';
  } else (
    channel = message.channel
  );

  if (channel.permissionsFor(message.guild.id).has('SendMessages') === false) {
    const lockchannelError2 = new Discord.EmbedBuilder()
      .setDescription(`${channel} is already locked!`)
      .setColor("Random");

    message.channel.send({ embeds: [lockchannelError2] });
  }

  channel.permissionOverwrites.create
    (message.guild.id, { SEND_MESSAGES: false });

  const embed = new Discord.EmbedBuilder()
    .setTitle(`Channel Locked!`)
    .setDescription(`**Channel:** ${channel} \n **Reason:** ${reason}`)
    .setColor("Random");
  message.channel.send({ embeds: [embed] });
};
exports.name = "lock";