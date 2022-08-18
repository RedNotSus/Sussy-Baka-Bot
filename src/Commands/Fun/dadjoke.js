const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "dadjoke",
  run: async (client, message, args) => {
    let res = await axios.get('https://api.popcat.xyz/joke').catch((err) => {
      message.reply(`An error occured, Try again or report the bug`);
    });
    const jokeEmbed = new Discord.EmbedBuilder()
      .setTitle('Heres a random Dadjoke!')
      .setDescription(`${res.data.joke}  <:Troll_Dad:987854503669792808>`)
      .setColor('Random');
    await message.reply({
      embeds: [
        jokeEmbed
      ]
    });
  }
};