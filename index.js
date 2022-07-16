// Main Varianles
const express = require("express");
const app = express()
const mongoose = require("mongoose")
const testSchema = require('./models/test-schema')
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"],
  allowedMentions: ["users"]
});
const fs = require("fs");
const prefix = ("-");


app.listen(3000, () => {
  console.log(`Bot starting...`)
})

app.get('/', async(req,res) =>{
  res.send("Hello Hell!")
});



client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(f => !f.includes(`.`))
for (fold of commands) {
  const folder = fs.readdirSync(`./Commands/${fold}`).filter(file => file.endsWith(`.js`))
  for (file of folder) {
    const command = require(`./Commands/${fold}/${file}`)
    client.commands.set(command.name, command)
  }
}

console.log(`Successfully loaded ${client.commands.size} commands!`);


client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift()
 //   const command = client.commands.get(commandName)
        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  if (!command) return
    command.run(client, message, args)
  }
 
})

client.snipes = new Discord.Collection()
client.on("messageDelete",(message, channel) => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.id,
    image: message.attachments.first()
  })
})

const { MessageEmbed } = require("discord.js");
const { afk } = require("./Collections/afk.js");
const moment = require("moment");
client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;

  const memberMentioned = message.mentions.members.first();

  if (memberMentioned) {
    const data = afk.get(memberMentioned.id);

    if (data) {
      const [timestamp, authorsMessage] = data;
      const timeAgo = moment(timestamp).fromNow();

      const afkEmbed = new MessageEmbed()
        .setTitle(`${memberMentioned.user.tag} is currently afk bruh...`)
        .setDescription(`Hey, ${memberMentioned} is currently afk (${timeAgo})... just wait a min for him to respond...`)
        .addField("AFK:", `${memberMentioned}`, true)
        .addField("Their Message:", `${authorsMessage}`, true)
        .addField("Time ago:", `${timeAgo}`, true)
        .setColor("#525254")
        .setTimestamp()
        .setFooter({ text: "My mans AFK, stop trolling him" });
      message.reply({ embeds: [afkEmbed] });
      
    };
  };

  const getData = afk.get(message.author.id)
  
  if (getData) {
    if (message.content.includes(`${prefix}afk`)) return;
    afk.delete(message.author.id);
    message.reply(`Oh, your back ${message.member}! I removed your afk...`)
  };
});


client.on("guildCreate", (guild) => {
  let channelToSend;
  let commands = client.commands.map(command => command.name).join(", ");

  guild.channels.cache.forEach((channel) => {
    if (channel.type === "GUILD_TEXT" && !channelToSend && channel.permissionsFor(guild.me).has("SEND_MESSAGES")) channelToSend = channel;
  });

  if (!channelToSend) return;

  let joinMessageEmbed = new Discord.MessageEmbed()
    .setTitle("Thanks for inviting me!")
    .setURL("https://discord.gg/Snyb6YWErN")
    .setDescription("Hello, my name is **Sussy Baka**\n\nTo get started, Run the command `-help`. Thats how All commands are run with me like -meme")
    .addField('Important links','[Invite](https://discord.com/oauth2/authorize?client_id=949114925756862544&permissions=8&scope=bot) - Add the bot to another server to help the bot! \n[Support Server](https://discord.gg/Snyb6YWErN) - Get some bot support if your having issues!\n[Community Server](https://discord.com/invite/3ZwP8a6dz3) - A server with People to chat with. Ran by the developer, and you get too see prodotypes!')
    .setFooter({ text: `Enjoy the bot!` });
  channelToSend.send({ embeds: [joinMessageEmbed] });
});

client.on("message", message => {
if(message.content === "<@735641273477890178>") {
  message.channel.send("imagine pinging my developer. smh")
}
})

client.on('ready', () => {
  console.log(`Bot is in ${client.guilds.cache.size} servers!`)
})

client.on('ready', () => {
 client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: 'WATCHING' })
}) 

client.on(`ready`, async (message) => {
  const commands = fs.readdirSync("./Commands/./").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${fold}/.`)
  const T = client.channels.cache.get('972373816519057408')
  T.send(`✅ ${commandName}`)
  }})

client.on(`ready`, async (message) => {
  await mongoose.connect(process.env.MONGO_URI, {
    keepAlive: true
  })

})

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:\n", err);
});
process.on("unhandledException", (err) => {
  console.error("Unhandled Promise Exception:\n", err);
});
process.on("unhandledExceptionMonitor", (err) => {
  console.error("Unhandled Promise Exception (Monitor):\n", err);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.error("Multiple Resolves:\n", type, promise, reason);
});

client.login(process.env.token)
  .then((r) => console.log(`Successfully logged in as ${client.user.tag}!`))
  .catch((e) => console.log(e));


  //Never gonna give you up, never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you.
