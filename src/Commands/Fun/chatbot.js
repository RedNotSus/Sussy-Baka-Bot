const discord = require('discord.js')
const fetch = require('node-fetch');

let key = 'e'

module.exports = {
  name: "chatbot",
  description: "Talk with a chatbot!",
  aliases: ["cb"],
  run: async (client, message, args) => {
    if (!args[0]) return message.reply("Please provide text!");

  fetch(`http://api.brainshop.ai/get?bid=167685&key=${key}&uid=1&msg=${args.join("+")}`)
  .then(res => res.json())
  .then(data => {
   let embed = new discord.MessageEmbed()
   .setDescription(data.cnt)
   .setColor("GREEN");

   message.channel.send({
     embeds: [embed]
   })      
  });
  },
};