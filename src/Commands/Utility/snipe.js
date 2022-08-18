const Discord = require('discord.js');
module.exports = {
  name: "snipe",
  description: "shows the latest deleted message.",
  run: async (client, message, args) => {
    const msg = client.snipes.get(message.channel.id);
    if (!msg) return message.channel.send("Theres nothing to be sniped!");

    const embed = new Discord.EmbedBuilder()
      .setTitle("Sniped Content")
      .addFields({ name: 'Sniped in:', value: `<#${message.channel.id}>` })
      .addFields({ name: 'Message By:', value: `<@${msg.author}>` })
      .addFields({ name: 'Sniped Content:', value: `\`\`\`\n${msg.content}\`\`\`` })
      .setColor("#8600ff")
      .setTimestamp()
      .setFooter({ text: `Requested by: ${message.author.username}`, iconURL: message.author.displayAvatarURL() });

    if (msg.image) embed.setImage(msg.image);
    message.channel.send({ embeds: [embed] });
  }
};