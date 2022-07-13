const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "Answer your question with a random answer",
  run: async (client, message, args) => {
    const q = args.join(" ");
    const array = [
      "Yes",
      "Yes maybe?",
      "Absolute",
      "Maybe",
      "Hmmmm",
      "Sussy Baka",
      "Idk",
      "No maybe?",
      "No",
      "That is real?",
      "Huh?",
      "I hope yes",
      "I hope no",
      "I hope so",
      "Small chance",
      "Big chance",
      "Hahaha",
      "Wht the?",
      "Never!",
      "Bruh",
      "Yoo whatt??",
      "oeknejsodpoep",
    ];
    const a = array[Math.floor(Math.random() * array.length)];

    const succes = new MessageEmbed()
      .setTitle("**ANSWERED**")
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setDescription("🎱 Your question has been answered!")
      .addField("Question:", `${q}.`)
      .addField("Answer:", `${a}.`);

    if (!q) {
      return message.reply("What are you going to ask me?").then((msg) => {
        setTimeout(() => msg.delete(), 5000);
      });
    }
    message.channel.send({ embeds: [succes] });
  },
};