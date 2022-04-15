const express = require("express");
const app = express()
app.listen(3000, () => {
  console.log(`Bot starting...`)
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});
const fs = require("fs");
const prefix = "-"

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

client.on('ready', () => {
 client.user.setActivity('Among Us', { type: 'PLAYING' })
})

client.on('ready', () => {
  console.log(`Bot is in ${client.guilds.cache.size} servers!`)
})

client.login(process.env.token)
  .then((r) => console.log(`Successfully logged in as ${client.user.tag}!`))
  .catch((e) => console.log(e));



