const Discord = require("discord.js");
module.exports = {
   name: "coinflip",
   aliases: ['cf'],
   description: "Flips the coin",
   usage: "-coinflip",
   run: async (client, message, args) => {

      let heads = new Discord.EmbedBuilder()

         .setTitle("Heads!")
         .setImage("https://www.coinsforanything.co.uk/wp-content/plugins/taler-configurator/mdateien/794529185235.png");

      let tails = new Discord.EmbedBuilder()

         .setTitle("Tails!")
         .setImage("https://www.coinsforanything.co.uk/wp-content/plugins/taler-configurator/mdateien/546259185292.png");

      let replies = [({ embeds: [heads] }), ({ embeds: [tails] })];


      let embed = new Discord.EmbedBuilder()

         .setImage("https://c.tenor.com/tewn7lzVDgcAAAAM/coin-flip-flip.gif")
         .setTitle("The Coin Has Been Tossed...");

      message.channel.send({ embeds: [embed] }).then(m => {
         setTimeout(() => m.edit(replies[Math.floor(Math.random() * replies.length)]), 2200);
      });
   }
};