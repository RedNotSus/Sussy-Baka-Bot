const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "randomcolor",
  run: async (client, message, args) => {
    let res = await axios.get('https://api.popcat.xyz/randomcolor').catch((err) => {
      message.reply(`❌ There Was An Error While Fetching A Quote.`);
    });
    const memeEmbed = new Discord.EmbedBuilder()
      .setTitle('Heres your color!')
      .addFields({
        name: 'Color Name',
        value: `${res.data.name}`
      },
        {
          name: 'Hex',
          value: `#${res.data.hex}`
        })
      .setThumbnail(`${res.data.image}`)
      .setColor(`${res.data.hex}`);
    await message.reply({
      embeds: [
        memeEmbed
      ]
    });
  }
};