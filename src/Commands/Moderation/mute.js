const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "Moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("ManageRoles")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone"
      );
    }

    if (!message.guild.members.me.permissions.has("ManageRoles")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Please mention the member to who you want to mute");
    }

    if (user.id === message.author.id) {
      return message.channel.send("I won't mute you -_-");
    }


    let reason = args.slice(1).join(" ");


    if (!reason) {
      return message.channel.send("Please Give the reason to mute the member");
    }


    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");


    if (!muterole) {
      return message.channel.send("This server do not have role with name `Muted`");
    }



    user.roles.add(muterole);

    await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``);

    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``);



  }
};