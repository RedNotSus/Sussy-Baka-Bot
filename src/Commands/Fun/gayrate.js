const Discord = require("discord.js");

exports.run = (client, message, args) => {
   let member = message.mentions.members.first();

   if (member) {
      let gayrateEmbed = new Discord.EmbedBuilder()
         .setTitle('gay r8 machine')
         .setColor("#347cd4")
         .setDescription(`${member.user.tag} is ${Math.floor(Math.random() * 100) + 1}% gay 🏳️‍🌈`);

      message.channel.send({ embeds: [gayrateEmbed] });

      return;
   }

   if (args[0]) {
      let newEmbed2 = new Discord.EmbedBuilder()
         .setTitle('gay r8 machine')
         .setColor("#347cd4")
         .setDescription(`${args[0]} is ${Math.floor(Math.random() * 100) + 1}% gay 🏳️‍🌈`);

      message.channel.send({ embeds: [newEmbed2] });

      return;
   }

   if (!args[0]) {
      let newEmbed = new Discord.EmbedBuilder()

         .setTitle('gay r8 machine')
         .setColor("#347cd4")
         .setDescription(`You are ${Math.floor(Math.random() * 100) + 1}% gay 🏳️‍🌈`);

      message.channel.send({ embeds: [newEmbed] });

      return;

   }

};

exports.name = "gayrate";