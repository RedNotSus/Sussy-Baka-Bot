// import { Client, ComponentType, Message } from "discord.js";

const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ComponentType } = require("discord.js");

module.exports = {
  name: "help",
  description: "Help Embed for bot",
  category: "Utility",
  usage: "-help",
  aliases: [""],
  cooldown: 0,
  run: async (client, message, args) => {
    let currentEmbedDesc = "Invite Sussy Baka bot today!";
    let currentEmbedColor = "Random";
    let currentEmbedBtnsStyle = "Primary";

    // Current Dropdown Menu 
    let helpMenu = new ActionRowBuilder()
      .addComponents(
        new SelectMenuBuilder()
          .setCustomId("helpMenu")
          .setPlaceholder("Choose a Category!")
          .addOptions(
            [
              { label: "Info", value: "credits" },
              { label: "Moderation", value: "1PageEmbed" },
              { label: "Utility", value: "2PagesEmbed" },
              { label: "Fun", value: "3PagesEmbed" },
              { label: "Developer Only", value: "4PagesEmbed" }
            ]
          )
      );


    /**
     * 1 Page Embed
     */

    // Page 1
    let onePage_Page1Embed = new EmbedBuilder()
      .setTitle("<:Moderation:953745878689136662>  Moderation:")
      .setDescription(currentEmbedDesc)
      .addFields(
        { name: "`-addrole`", value: "<:Reply:983510044878458910>Adds a role to a user", inline: false },
        { name: "`-ban`", value: "<:Reply:983510044878458910>Ban a user from server", inline: false },
        { name: "`-kick`", value: "<:Reply:983510044878458910>Kick a user from server", inline: false },
        { name: "`-lock`", value: "<:Reply:983510044878458910>Lock a channel", inline: false },
        { name: "`-mute`", value: "<:Reply:983510044878458910>Mute a user", inline: false },
        { name: "`-purge`", value: "<:Reply:983510044878458910>Purge an amount of messages", inline: false },
        { name: "`-slomode`", value: "<:Reply:983510044878458910>Set slowmode for a channel", inline: false },
        { name: "`-unlock`", value: "<:Reply:983510044878458910>Unlock a channel", inline: false },
        { name: "`-unmute`", value: "<:Reply:983510044878458910>Unmute a user", inline: false }
      )
      .setColor(currentEmbedColor)
      .setFooter({ text: `Requested by: ${message.author.tag} | Page 1 of 1`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp()
      .setThumbnail('https://cdn.discordapp.com/emojis/953745878689136662.webp?size=128&quality=lossless');
    let onePage_Page1Btns = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("1Page_Page1Btn1")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<<")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("1Page_Page1Btn2")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("1Page_Page1Btn3")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("1Page_Page1Btn4")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">>")
          .setDisabled(true)
      );


    /**
     * 2 Pages Embed
     */

    // Page 1
    let twoPages_Page1Embed = new EmbedBuilder()
      .setTitle("🧰  Utility:")
      .setDescription(currentEmbedDesc)
      .addFields(
        { name: "`-afk`", value: "<:Reply:983510044878458910>Set your AFK", inline: false },
        { name: "`-avatar`", value: "<:Reply:983510044878458910>Look at someones avatar", inline: false },
        { name: "`-bug`", value: "<:Reply:983510044878458910>Report a bug", inline: false },
        { name: "`-choose`", value: "<:Reply:983510044878458910>Make me choose between different things", inline: false },
        { name: "`-help`", value: "<:Reply:983510044878458910>This command", inline: false },
        { name: "`-invite`", value: "<:Reply:983510044878458910>Show my invite links", inline: false },
        { name: "`-ping`", value: "<:Reply:983510044878458910>Check my ping", inline: false },
        { name: "`-quote`", value: "<:Reply:983510044878458910>Finds a quote", inline: false }
      )
      .setColor(currentEmbedColor)
      .setFooter({ text: `Requested by: ${message.author.tag} | Page 1 of 2`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());
    let twoPages_Page1Btns = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("2Pages_Page1Btn1")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<<")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("2Pages_Page1Btn2")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("2Pages_Page1Btn3")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">"),
        new ButtonBuilder()
          .setCustomId("2Pages_Page1Btn4")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">>")
      );

    // Page 2
    let twoPages_Page2Embed = new EmbedBuilder()
      .setTitle("🧰  Utility:")
      .setDescription(currentEmbedDesc)
      .addFields(
        { name: "`-randomcolor`", value: "<:Reply:983510044878458910>Generates a random color", inline: false },
        { name: "`-reverce`", value: "<:Reply:983510044878458910>Reverce a string", inline: false },
        { name: "`-rud`", value: "<:Reply:983510044878458910>React up down", inline: false },
        { name: "`-snipe`", value: "<:Reply:983510044878458910>Snipes the latest deleted message", inline: false },
        { name: "`-sudo`", value: "<:Reply:983510044878458910>Makes someone say something", inline: false },
        { name: "`-suggest`", value: "<:Reply:983510044878458910>Suggest an idea", inline: false },
        { name: "`-uptime`", value: "<:Reply:983510044878458910>View my uptime", inline: false },
        { name: "`-userinfo`", value: "<:Reply:983510044878458910>View userinfo", inline: false }
      )
      .setColor(currentEmbedColor)
      .setFooter({ text: `Requested by: ${message.author.tag} | Page 2 of 2`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());
    let twoPages_Page2Btns = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("2Pages_Page2Btn1")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<<"),
        new ButtonBuilder()
          .setCustomId("2Pages_Page2Btn2")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<"),
        new ButtonBuilder()
          .setCustomId("2Pages_Page2Btn3")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("2Pages_Page2Btn4")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">>")
          .setDisabled(true)
      );


    /**
     * 3 Pages Embed
     */

    // Page 1
    let threePages_Page1Embed = new EmbedBuilder()
      .setTitle("😜  Fun:")
      .setDescription(currentEmbedDesc)
      .addFields(
        { name: "`-8ball`", value: "<:Reply:983510044878458910>Ask the 8ball something", inline: false },
        { name: "`-animal`", value: "<:Reply:983510044878458910>View animal pics and facts", inline: false },
        { name: "`-chatbot`", value: "<:Reply:983510044878458910>Talk to a chatbot!", inline: false },
        { name: "`-cmm`", value: "<:Reply:983510044878458910>Makes a CMM meme", inline: false },
        { name: "`-coinflip`", value: "<:Reply:983510044878458910>Flips a coin", inline: false },
        { name: "`-dadjoke`", value: "<:Reply:983510044878458910>Gives a dadjoke", inline: false },
        { name: "`-deepfry`", value: "<:Reply:983510044878458910>Deepfry someone", inline: false },
        { name: "`-gayrate`", value: "<:Reply:983510044878458910>Check how gay you are", inline: false }
      )
      .setColor(currentEmbedColor)
      .setFooter({ text: `Requested by: ${message.author.tag} | Page 1 of 3`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());
    let threePages_Page1Btns = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("3Pages_Page1Btn1")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<<")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("3Pages_Page1Btn2")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("3Pages_Page1Btn3")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">"),
        new ButtonBuilder()
          .setCustomId("3Pages_Page1Btn4")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">>")
          .setDisabled(true)
      );

    // Page 2
    let threePages_Page2Embed = new EmbedBuilder()
      .setTitle("😜  Fun:")
      .setDescription(currentEmbedDesc)
      .addFields(
        { name: "`-hack`", value: "<:Reply:983510044878458910>Hack someone (fake)", inline: false },
        { name: "`-meme`", value: "<:Reply:983510044878458910>Find memes", inline: false },
        { name: "`-tweet `", value: "<:Reply:983510044878458910>Make Biden tweet something", inline: false }
      )
      .setColor(currentEmbedColor)
      .setFooter({ text: `Requested by: ${message.author.tag} | Page 2 of 2`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());
    let threePages_Page2Btns = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("3Pages_Page2Btn1")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<<"),
        new ButtonBuilder()
          .setCustomId("3Pages_Page2Btn2")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<"),
        new ButtonBuilder()
          .setCustomId("3Pages_Page2Btn3")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("3Pages_Page2Btn4")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">>")
          .setDisabled(true)
      );


    /**
     * 4 Pages Embed
     */

    // Page 1
    let fourPages_Page1Embed = new EmbedBuilder()
      .setTitle("<a:Developer:971222164193804289>  Developer Only:")
      .setDescription(currentEmbedDesc)
      .addFields(
        { name: "`-restart`", value: "<:Reply:983510044878458910>Restart the bot", inline: false },
        { name: "`Coming Soon!`", value: "<:Reply:983510044878458910>Coming Soon!", inline: false }
      )
      .setColor(currentEmbedColor)
      .setFooter({ text: `Requested by: ${message.author.tag} | Page 1 of 1`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp()
      .setThumbnail('https://cdn.discordapp.com/emojis/971222164193804289.gif?size=128&quality=lossless');
    let fourPages_Page1Btns = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId("4Pages_Page1Btn1")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<<")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("4Pages_Page1Btn2")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel("<")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("4Pages_Page1Btn3")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">")
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId("4Pages_Page1Btn4")
          .setStyle(currentEmbedBtnsStyle)
          .setLabel(">>")
          .setDisabled(true)
      );

    /**
     * Help Command Info Embed
     */
    let helpCmdCreditsEmbed = new EmbedBuilder()
      .setTitle("Information")
      .setDescription("Here is a list of commands that you can use.\n[Invite me](https://discord.com/oauth2/authorize?client_id=949114925756862544&permissions=8&scope=bot)\n[Support Server](https://discord.gg/Snyb6YWErN)")
      .addFields(
        { name: "<:Moderation:953745878689136662>  Moderation:", value: "<:Reply:983510044878458910>Moderation commands", inline: true },
        { name: "🔧  Utility:", value: "<:Reply:983510044878458910>Commands that are usefull", inline: true },
        { name: "😜  Fun:", value: "<:Reply:983510044878458910>Fun commands", inline: true },
        { name: "Testing:", value: "<:Reply:983510044878458910>Commands that are in testing", inline: true },
        { name: "‎ ", value: "> <:Bugnet:987891657682858024>  Did you find a loophole/bug in the bot? Report it using the `bug` command!", inline: false },
      )
      .setColor("Random")
      .setTimestamp()
      .setFooter({ text: `${client.commands.size} Commands in total` })
      .setThumbnail(client.user.displayAvatarURL());


    const embedMsg = await message.channel.send({ embeds: [helpCmdCreditsEmbed], components: [helpMenu, fourPages_Page1Btns] });
    // Dropdown Menu Functions
    let menuCollector = embedMsg.createMessageComponentCollector({
      componentType: ComponentType.SelectMenu,
      max: 10000,
      time: 30000
    });

    menuCollector.on("collect", async (menu) => {
      let value = menu.values[0];

      if (menu.user.id !== message.author.id) return menu.followUp({ content: `This is not for you ${menu.user}!`, ephemeral: true });

      if (value === "1PageEmbed") {
        await menu.update({ embeds: [onePage_Page1Embed], components: [helpMenu, onePage_Page1Btns] });
      };
      if (value === "2PagesEmbed") {
        await menu.update({ embeds: [twoPages_Page1Embed], components: [helpMenu, twoPages_Page1Btns] });
      };
      if (value === "3PagesEmbed") {
        await menu.update({ embeds: [threePages_Page1Embed], components: [helpMenu, threePages_Page1Btns] });
      };
      if (value === "4PagesEmbed") {
        await menu.update({ embeds: [fourPages_Page1Embed], components: [helpMenu, fourPages_Page1Btns] });
      };
      if (value === "credits") {
        await menu.update({ embeds: [helpCmdCreditsEmbed], components: [helpMenu] });
      };
    });

    menuCollector.on("end", async (menu) => {
      let lockedHelpMenu = new ActionRowBuilder()
        .addComponents(
          new SelectMenuBuilder()
            .setCustomId("lockedHelpMenu")
            .setPlaceholder("Currency")
            .addOptions(
              [
                { label: "1 Page Embed", value: "1PageEmbed" },
                { label: "2 Pages Embed", value: "2PagesEmbed" },
                { label: "3 Pages Embed", value: "3PagesEmbed" },
                { label: "4 Pages Embed", value: "4PagesEmbed" },
                { label: "Credits", value: "credits" }
              ]
            )
            .setDisabled(true)
        );
      await menu.update({ components: [lockedHelpMenu] });
    });

    // Buttons Functions
    let btnCollector = embedMsg.createMessageComponentCollector({
      componentType: ComponentType.Button,
      time: 30000
    });

    btnCollector.on("collect", async (button) => {
      if (button.user.id !== message.author.id) return menu.followUp({ content: `This is not for you ${button.user}!`, ephemeral: true });

      /**
       * 2 Pages Button
       */

      // Page 1
      if (button.customId === "2Pages_Page1Btn3") {
        await button.deferUpdate();
        await button.editReply({ embeds: [twoPages_Page2Embed], components: [helpMenu, twoPages_Page2Btns] });
      };
      if (button.customId === "2Pages_Page1Btn4") {
        await button.deferUpdate();
        await button.editReply({ embeds: [twoPages_Page2Embed], components: [helpMenu, twoPages_Page2Btns] });
      };

      // Page 2
      if (button.customId === "2Pages_Page2Btn1") {
        await button.deferUpdate();
        await button.editReply({ embeds: [twoPages_Page1Embed], components: [helpMenu, twoPages_Page1Btns] });
      };
      if (button.customId === "2Pages_Page2Btn2") {
        await button.deferUpdate();
        await button.editReply({ embeds: [twoPages_Page1Embed], components: [helpMenu, twoPages_Page1Btns] });
      };


      /**
       * 3 Pages Button
       */

      // Page 1
      if (button.customId === "3Pages_Page1Btn3") {
        await button.deferUpdate();
        await button.editReply({ embeds: [threePages_Page2Embed], components: [helpMenu, threePages_Page2Btns] });
      };
      if (button.customId === "3Pages_Page1Btn4") {
        await button.deferUpdate();
        await button.editReply({ embeds: [threePages_Page3Embed], components: [helpMenu, threePages_Page3Btns] });
      };

      // Page 2
      if (button.customId === "3Pages_Page2Btn1") {
        await button.deferUpdate();
        await button.editReply({ embeds: [threePages_Page1Embed], components: [helpMenu, threePages_Page1Btns] });
      };
      if (button.customId === "3Pages_Page2Btn2") {
        await button.deferUpdate();
        await button.editReply({ embeds: [threePages_Page1Embed], components: [helpMenu, threePages_Page1Btns] });
      };
      if (button.customId === "3Pages_Page2Btn3") {
        await button.deferUpdate();
        await button.editReply({ embeds: [threePages_Page3Embed], components: [helpMenu, threePages_Page3Btns] });
      };
      if (button.customId === "3Pages_Page2Btn4") {
        await button.deferUpdate();
        await button.editReply({ embeds: [threePages_Page3Embed], components: [helpMenu, threePages_Page3Btns] });
      };

      // Page 3
      if (button.customId === "3Pages_Page3Btn1") {
        await button.deferUpdate();
        await button.editReply({ embeds: [threePages_Page1Embed], components: [helpMenu, threePages_Page1Btns] });
      };
      if (button.customId === "3Pages_Page3Btn2") {
        await button.deferUpdate();
        await button.editReply({ embeds: [threePages_Page2Embed], components: [helpMenu, threePages_Page2Btns] });
      };


      /**
       * 4 Pages Button
       */

      // Page 1
      if (button.customId === "4Pages_Page1Btn3") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page2Embed], components: [helpMenu, fourPages_Page2Btns] });
      };
      if (button.customId === "4Pages_Page1Btn4") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page4Embed], components: [helpMenu, fourPages_Page4Btns] });
      };

      // Page 2
      if (button.customId === "4Pages_Page2Btn1") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page1Embed], components: [helpMenu, fourPages_Page1Btns] });
      };
      if (button.customId === "4Pages_Page2Btn2") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page1Embed], components: [helpMenu, fourPages_Page1Btns] });
      };
      if (button.customId === "4Pages_Page2Btn3") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page3Embed], components: [helpMenu, fourPages_Page3Btns] });
      };
      if (button.customId === "4Pages_Page2Btn4") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page4Embed], components: [helpMenu, fourPages_Page4Btns] });
      };

      // Page 3
      if (button.customId === "4Pages_Page3Btn2") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page1Embed], components: [helpMenu, fourPages_Page1Btns] });
      };
      if (button.customId === "4Pages_Page3Btn2") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page2Embed], components: [helpMenu, fourPages_Page2Btns] });
      };
      if (button.customId === "4Pages_Page3Btn3") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page4Embed], components: [helpMenu, fourPages_Page4Btns] });
      };
      if (button.customId === "4Pages_Page3Btn4") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page4Embed], components: [helpMenu, fourPages_Page4Btns] });
      };

      // Page 4
      if (button.customId === "4Pages_Page4Btn1") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page1Embed], components: [helpMenu, fourPages_Page1Btns] });
      };
      if (button.customId === "4Pages_Page4Btn2") {
        await button.deferUpdate();
        await button.editReply({ embeds: [fourPages_Page3Embed], components: [helpMenu, fourPages_Page3Btns] });
      };
    });

    btnCollector.on("end", async (button) => {
      let lockedHelpBtns = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId("lockedBtn1")
            .setStyle(currentEmbedBtnsStyle)
            .setLabel("<<")
            .setDisabled(true),
          new ButtonBuilder()
            .setCustomId("lockedBtn2")
            .setStyle(currentEmbedBtnsStyle)
            .setLabel("<")
            .setDisabled(true),
          new ButtonBuilder()
            .setCustomId("lockedBtn3")
            .setStyle(currentEmbedBtnsStyle)
            .setLabel(">")
            .setDisabled(true),
          new ButtonBuilder()
            .setCustomId("lockedBtn4")
            .setStyle(currentEmbedBtnsStyle)
            .setLabel(">>")
            .setDisabled(true)
        );
      await button.editReply({ components: [lockedHelpBtns] });
    });
  }
};