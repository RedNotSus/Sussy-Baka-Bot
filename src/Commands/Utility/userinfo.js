const moment = require("moment");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.mentions.members.first() || message.member;
  let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
  let embed = new Discord.EmbedBuilder()
    .setTitle("Who Is That?")
    .setColor("Random")
    .addFields({ name: `${user.user.tag}`, value: `${user}`, inline: true })
    .addFields({ name: "ID:", value: `${user.id}`, inline: true })
    .addFields({ name: "Nickname:", value: `${user.displayName}`, inline: true })
    .addFields({ name: "Joined The Server On:", value: `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY")}`, inline: true })
    .addFields({ name: "Account Created On:", value: `${moment.utc(user.user.createdAt).format("dddd, MMMM Do YYYY")}`, inline: true })
    .addFields({ name: 'Roles:', value: user.roles.cache ? user.roles.cache.map(r => `${r}`).join(' | ') : "", inline: true })
    .setFooter({ text: `Idk what to put here` });

  message.channel.send({ embeds: [embed] });

};
module.exports.name = `userinfo`;