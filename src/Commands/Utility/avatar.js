const { EmbedBuilder } = require("discord.js");
module.exports = {
  info: {
    name: "avatar",
  },
  run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author || message.guild.members.fetch(args[0]) || client.users.cache.get(u => u.id === args[0]);
    const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
    let embed = new EmbedBuilder()
      .setAuthor({ name: `Avatar from: ${user.tag}`, iconURL: user.displayAvatarURL() })
      .setImage(avatar)
      .setColor("Aqua")
      .addFields({ name: "<:Arrow:964316633042681956> PNG", value: `[\`LINK\`](${user.displayAvatarURL({ format: "png" })})`, inline: true })
      .addFields({ name: "<:Arrow:964316633042681956> JPEG", value: `[\`LINK\`](${user.displayAvatarURL({ format: "jpg" })})`, inline: true })
      .addFields({ name: "<:Arrow:964316633042681956> WEBP", value: `[\`LINK\`](${user.displayAvatarURL({ format: "webp" })})`, inline: true })
      .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp()
      .setURL(user.displayAvatarURL({
        dynamic: true
      }));
    message.channel.send({ embeds: [embed] }).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
  }
};

module.exports.name = "avatar";