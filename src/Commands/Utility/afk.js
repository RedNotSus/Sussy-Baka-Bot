const { afk } = require("../../Collections/afk");


module.exports = {
  name: "afk",
  description: "Set your status if you want to be afk.",
  aliases: ["awayfromkeyboard", "away", "from", "keyboard", "awa", "awayf", "awayfr", "awayfro", "awayfrom", "awayfromk", "awayfromke", "awayfromkey", "awayfromkeyb", "awayfromkeybo", "awayfromkeyboa", "awayfromkeyboar"],
  run: async (client, message, args) => {
    const authorsMessage = args.join(" ") || "No message provided.";

    afk.set(message.author.id, [Date.now(), authorsMessage]);
    message.reply(`Done setting your status to afk...`);
  },
};