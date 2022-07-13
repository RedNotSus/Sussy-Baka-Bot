const discord = require('discord.js')
const axios = require('axios');

module.exports = {
  name: "meme",
  description: "Find some memes",
  aliases: ["meme"],
  run: async (client, message, args) => {
    let res = await axios.get(`https://api.popcat.xyz/meme`).catch((err) => {
message.reply(`An error occured, Try again or report the bug`);
});

  let embed = new discord.MessageEmbed()
  .setTitle(`${res.data.title}`)
  .setImage(`${res.data.image}`) 
  .setURL(`${res.data.url}`)
  .setFooter(`👍 ${res.data.upvotes}| 💬 ${res.data.comments}`)
  .setColor("RANDOM");

  message.channel.send({
    embeds: [embed]
  });
  },
};