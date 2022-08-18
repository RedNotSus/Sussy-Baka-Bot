// Main Varianles
const express = require("express");
const app = express();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers", "GuildMessageReactions", "MessageContent"],
  allowedMentions: {
    repliedUser: false,
    users: false,
  },
});
const fs = require("fs");
const prefix = ("-");

app.listen(3000, () => {
  console.log(`Bot starting...`);
});

app.get('/', async (req, res) => {
  res.send("Hello Hell!");
});

client.commands = new Discord.Collection();

const commands = fs.readdirSync("./src/Commands").filter(f => !f.includes(`.`));
for (fold of commands) {
  const folder = fs.readdirSync(`./src/Commands/${fold}`).filter(file => file.endsWith(`.js`));
  for (file of folder) {
    const command = require(`./src/Commands/${fold}/${file}`);
    client.commands.set(command.name, command);
  }
}

console.log(`Successfully loaded ${client.commands.size} commands!`);


client.on("messageCreate", message => {
  if (message.content === "<@735641273477890178>") {
    message.channel.send("imagine pinging my developer. smh");
  }
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift();
    //   const command = client.commands.get(commandName)
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command) return;
    command.run(client, message, args);
  }

});

client.snipes = new Discord.Collection();
client.on("messageDelete", (message) => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.id,
    image: message.attachments.first()
  });
});

const { EmbedBuilder } = require("discord.js");
const { afk } = require("./src/Collections/afk.js");
const moment = require("moment");
client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;

  const memberMentioned = message.mentions.members.first();

  if (memberMentioned) {
    const data = afk.get(memberMentioned.id);

    if (data) {
      const [timestamp, authorsMessage] = data;
      const timeAgo = moment(timestamp).fromNow();

      const afkEmbed = new EmbedBuilder()
        .setTitle(`${memberMentioned.user.tag} is currently afk bruh...`)
        .setDescription(`Hey, ${memberMentioned} is currently afk (${timeAgo})... just wait a min for him to respond...`)
        .addFields({ name: "AFK:", value: `${memberMentioned}`, inline: true })
        .addFields({ name: "Their Message:", value: `${authorsMessage}`, inline: true })
        .addFields({ name: "Time ago:", value: `${timeAgo}`, inline: true })
        .setColor("#525254")
        .setTimestamp()
        .setFooter({ text: "My mans AFK, stop trolling him" });
      message.reply({ embeds: [afkEmbed] });
    };
  };

  const getData = afk.get(message.author.id);

  if (getData) {
    if (message.content.includes(`${prefix}afk`)) return;
    afk.delete(message.author.id);
    message.reply(`Oh, your back ${message.member}! I removed your afk...`);
  };
});


client.on("guildCreate", (guild) => {
  let channelToSend;

  guild.channels.cache.forEach((channel) => {
    if (channel.type === "GUILD_TEXT" && !channelToSend && channel.permissionsFor(guild.me).has("SEND_MESSAGES")) channelToSend = channel;
  });

  if (!channelToSend) return;

  let joinEmbedBuilder = new Discord.EmbedBuilder()
    .setTitle("Thanks for inviting me!")
    .setURL("https://discord.gg/Snyb6YWErN")
    .setDescription("Hello, my name is **Sussy Baka**\n\nTo get started, Run the command `-help`. Thats how All commands are run with me like -meme")
    .addFields({ name: 'Important links', value: '[Invite](https://discord.com/oauth2/authorize?client_id=949114925756862544&permissions=8&scope=bot) - Add the bot to another server to help the bot! \n[Support Server](https://discord.gg/Snyb6YWErN) - Get some bot support if your having issues!\n[Community Server](https://discord.com/invite/3ZwP8a6dz3) - A server with People to chat with. Ran by the developer, and you get too see prodotypes!' })
    .setFooter({ text: `Enjoy the bot!` });
  channelToSend.send({ embeds: [joinEmbedBuilder] });
});

client.on('ready', () => {
  console.log(`Bot is in ${client.guilds.cache.size} servers!`);
  client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: 'WATCHING' });
  console.log(`Successfully logged in as ${client.user.tag}`);

  const commands = fs.readdirSync("./src/Commands/./").filter(file => file.endsWith(".js"));
  for (file of commands) {
    const commandName = file.split(".")[0];
    const channel = client.channels.cache.get('972373816519057408');
    channel.send(`✅ ${commandName}`);
  }
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:\n", err);
});
process.on("unhandledException", (err) => {
  console.error("Unhandled Promise Exception:\n", err);
});
process.on("unhandledExceptionMonitor", (err) => {
  console.error("Unhandled Promise Exception (Monitor):\n", err);
});

client.login('MTAwNDgyODcwNTIwNzYxNTYwMA.G9-mnz.o8onJAYE02yDrZ06zOHBqA-Z9U5NEG_jWyiuLM').catch((e) => console.log(e));


  //Never gonna give you up, never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you.
