const { MessageEmbed } = require("discord.js")
module.exports = {
  info: {
    name: "avatar",
  },
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author || message.guild.members.fetch(args[0]) || client.users.cache.get(u => u.id === args[0])
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true})
        let embed = new MessageEmbed()
        .setAuthor(`Avatar from: ${user.tag}`, user.displayAvatarURL())
        .setImage(avatar)
        .setColor("AQUA")
        .addField("<:Arrow:964316633042681956> PNG",`[\`LINK\`](${user.displayAvatarURL({format: "png"})})`, true)
        .addField("<:Arrow:964316633042681956> JPEG",`[\`LINK\`](${user.displayAvatarURL({format: "jpg"})})`, true)
        .addField("<:Arrow:964316633042681956> WEBP",`[\`LINK\`](${user.displayAvatarURL({format: "webp"})})`, true)
          .setFooter(`Requested by ${message.author.username}`,
 message.author.displayAvatarURL())
          .setTimestamp()
        .setURL(user.displayAvatarURL({
          dynamic: true
        }))
      message.channel.send({ embeds : [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
    }
}

module.exports.name = "avatar"