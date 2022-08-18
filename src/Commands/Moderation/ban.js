const { ButtonBuilder, EmbedBuilder, ActionRowBuilder } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Bans a member",
  permissions: ["BAN_MEMBERS"],
  aliases: ["b"],
  category: "Moderation",
  disabledChannel: [],

  run: async (client, message, args) => {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      return message.reply("You dont have perms!");
    let member = message.mentions.members.first();
    if (!member) return message.reply("You need to mention someone to ban!");
    const reason = args.slice(1).join(" ");
    //Notifcation Embed
    const em = new EmbedBuilder()
      .setTitle(`Server Ban`)
      .setFooter({ text: `Banned by ${message.author.tag}` })
      .setColor(`Red`);
    //Fetching reason
    if (!reason) {
      em.setDescription(
        `You have been banned from ${message.guild.name} \nIf you think this is a mistake, please appeal in [here](https://discord.com/invite/3ZwP8a6dz3)`
      );
    } else {
      em.setDescription(
        `You have been banned from ${message.guild.name} for **${reason}** \nIf you think this is a mistake, please appeal in [here](https://discord.com/invite/3ZwP8a6dz3)`
      );
    }
    //Appeal Button
    const r = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setStyle(`Link`)
        .setLabel(`Appeal`)
        .setURL(
          `https://discord.com/invite/3ZwP8a6dz3`
        )
        .setEmoji(`🔗`)
    );
    await member.ban({ reason: reason });
    try {
      await member.send({ embeds: [em], components: [r] });
    } catch (e) {
      console.log(e);
      return message.reply(`${member.user.tag} has been banned! [Unable to DM]`);
    }
    if (!reason) {
      await message.reply(`${member.user.tag} was banned`);
    } else {
      await message.reply(`${member.user.tag} was banned for **${reason}**!`);
    }

  }
};
