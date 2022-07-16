const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
  name: "invite",
  description: "See all my special links.",
  aliases: ["inv", "invi", "invit", "link"],
  run: async (client, message, args) => {
    let inviteEmbed = new MessageEmbed()
      .setTitle("Here are my Invite links")
      .setDescription("Click the button below so you can invite me to your server. \nInvite Link: https://bit.ly/3NHiUsG\nSupport Server: https://discord.gg/Snyb6YWErN \nMain Server: https://discord.com/invite/3ZwP8a6dz3")
      .setFooter("My invite links")
      .setColor("RANDOM")
      .setTimestamp()

    let inviteEmbedBtn = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle("LINK")
          .setLabel("Invite me")
          .setURL("https://discord.com/oauth2/authorize?client_id=949114925756862544&permissions=8&scope=bot"),
      )
      .addComponents(
        new MessageButton()
          .setStyle("LINK")
          .setLabel("Support Server")
          .setURL("https://discord.gg/Snyb6YWErN"),
      )
      .addComponents(
        new MessageButton()
          .setStyle("LINK")
          .setLabel("Main Server")
          // You have to type your bots support server invite link here
          .setURL("https://discord.com/invite/3ZwP8a6dz3"),
      )
       .addComponents(
        new MessageButton()
          .setStyle("LINK")
          .setLabel("DBL")
          // You have to type your bots support server invite link here
          .setURL("https://discordbotlist.com/bots/sussy-baka/upvote"),
      )
        .addComponents(
          new MessageButton()
          .setStyle("LINK")
          .setLabel("Top.gg")
          // You have to type your bots support server invite link here
          .setURL("https://top.gg/bot/949114925756862544"),
      )
    
    message.reply({ embeds: [inviteEmbed], components: [inviteEmbedBtn] })
  }
}