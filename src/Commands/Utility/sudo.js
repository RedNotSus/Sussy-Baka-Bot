const { Message } = require('discord.js');

module.exports = {
  name: "sudo",
  description: "Makes a webhook to impersonate someone",
  usage: "sudo <user> <message>",
  category: "utility",
  args: true,
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {string[]} args 
   * @returns 
   */
  run: async (client, message, args) => {
    if (!message.guild.members.me.permissions.has("ManageWebhooks")) return message.channel.send('I dont have the required permission, `MANAGE_WEBHOOKS`, webhooks created are deleted after so you dont have to worry about raids');
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("you need to mention someone.");
    let msg = args.slice(1).join(" ");
    if (!msg) return message.channel.send("you gotta put a message");
    message.delete();
    const webhook = await message.channel.createWebhook({
      name: user.displayName,
      avatar: user.user.displayAvatarURL(),
    });
    await webhook.send(msg).then(() => {
      webhook.delete();
    });
  }
};