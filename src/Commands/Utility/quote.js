const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "quote",
  run: async (client, message, args) => {
let res = await axios.get('https://api.popcat.xyz/quote').catch((err) => {
message.reply(`❌ There Was An Error While Fetching A Quote.`);
});
const memeEmbed = new Discord.MessageEmbed()
  .addFields({
    name: 'Quote',
    value: `${res.data.quote}`
  },
             {
               name: 'Upvotes',
               value: `${res.data.upvotes}`
             })
    .setColor('RANDOM');
    await message.reply({
      embeds: [
        memeEmbed
      ]
    });
  }
};