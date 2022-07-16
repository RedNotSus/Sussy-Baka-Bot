const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addrole",
  aliases: ["roleadd"],
  run: async (client, message, args) => {

    if(!message.member.permissions.has("MANAGE_ROLES"))
      return message.reply("✘ - You don't have the permission to add a role for to someone!")

    if(!args[0] || !args[1]) return message.reply("Oops! to add a role use: \`y/addrole @user @role\`")
     try {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w|s]/gi, '')));

    const alreadyHasRole = member._roles.includes(roleName.id);

    if(alreadyHasRole) return message.reply("The person has already that role!");

    const addrole = new MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setDescription(`Successfully given the role: ${roleName} to: ${member.user}!`)
    .setColor("#2f3136")
    .setTimestamp()
    return member.roles.add(roleName).then(() => message.channel.send({ embeds: [addrole] }));
     } catch (e) {
       return message.reply('Please mention a valid role!') 
       console.log(e)
     }
  }
}