const discord = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["pong"],
    category: "Utility",
    usage: "ping",
    description: "Get the bot's ping!",
    run: async (client, message, args) => {

     let start = Date.now();

     let pingEmbed = new discord.MessageEmbed()
     .setDescription("Looks like the bot is slow.")
     .setColor("RED")
  
  message.channel.send({ embeds: [pingEmbed] }).then(m => {
    
    let end = Date.now();
    
    let embed = new discord.MessageEmbed()
    .setAuthor("Ping!", message.author.avatarURL())
    .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
    .addField("Message Latency", end - start + "ms", true)
    .addField("Database", "`🟢  Connected`")
    .setColor("#b89653");
    m.edit({ embeds: [embed] }).catch(e => message.channel.send(e))
    
  })

    }
};