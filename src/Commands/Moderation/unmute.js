exports.run = (client, message, args) =>{
    if (!message.member.permissions.has("MANAGE_ROLES")) {
    let member = message.mentions.members.first()
    if(!member) message.channel.send("Mention someone to unmute!")
    else {
   
       let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    if(!muterole) {
    return message.channel.send("This server do not have role with name `Muted`")
    }
    message.channel.send("Member has been succesfully unmuted.")
    }
   
    }else {
    message.reply("You don't have permission to do that!")
    }
   }