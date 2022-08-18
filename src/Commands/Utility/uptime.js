const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
   let days = Math.floor(client.uptime / 86400000);
   let hours = Math.floor(client.uptime / 3600000) % 24;
   let minutes = Math.floor(client.uptime / 60000) % 60;
   let seconds = Math.floor(client.uptime / 1000) % 60;

   const embed = new Discord.EmbedBuilder()
      .setTitle("🕐 | [ Sussy Bakas ] uptime:")
      .setDescription(`**Days**:\n\`\`\`prolog\n${days}d\`\`\`**Hours**\n \`\`\`prolog\n${hours}h\`\`\` **Minutes**:\n\`\`\`prolog\n${minutes}m\`\`\` **Seconds**\n\`\`\`prolog\n${seconds}s\`\`\``)
      .setColor("Random")
      .setTimestamp();
   message.channel.send({ embeds: [embed] });
};
module.exports.name = "uptime";