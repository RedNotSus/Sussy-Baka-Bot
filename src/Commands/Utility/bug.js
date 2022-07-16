const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

module.exports = {
  name: "report",
  description: "Report a bug or a user.",
  run: async (client, message, args) => {
    const query = args.join(" ");
    if (!query)
      return message.reply("You need to specify what you are reporting!");
    const owner = await client.users.fetch("735641273477890178");
    const reportEmbed = new Discord.MessageEmbed()
      .setTitle("New Bug!")
      .setDescription(`A Bug has been found!\n\n**Author:** ${message.author.tag}\n**Bug:** ${query}`)
      .setFooter("This bug was reported ")
      .setTimestamp()
      .setColor("#90BF60");
    message.author.send("Your bug has been reported. Thanks for the report!");
    owner.send({ embeds: [reportEmbed] });
    message.delete();
  },
};
module.exports.name = "bug"