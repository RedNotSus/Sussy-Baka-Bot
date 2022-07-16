const { Client, Message, MessageEmbed } = require("discord.js")
const ms = require("ms");
module.exports = {
  name: "slowmode",
  description: "set slowmode for a channel",
  aliases: ["sm", "slow"],
  category: "utility",
  run: async (client, message, args) => {
    if(!message.member.permissions.has('MANAGE_CHANNELS')) return;
    if(!args[0]) {
      message.channel.setRateLimitPerUser(0);
      return message.channel.send('The slowmode has been disabled!')
  }

  const raw = args[0];
  const milliseconds = ms(raw);

  if(isNaN(milliseconds)) return message.reply("Please put a **VALID** number! ``Example: '0'``");

  if(milliseconds < 1000) return message.reply("The minimum slowmode is 1 second!");

  message.channel.setRateLimitPerUser(milliseconds / 1000);
  message.channel.send(`The slowmode of this channel has been set to ${ms(milliseconds, {
    long: true
  })}`
  )
 },
};