module.exports = {
  name: "reverse",
  description: "Reversing `kid` - sus",
  aliases: ["rev", "reve", "rever", "revers"],
  run: async (client, message) => {
    let args = message.content
      .trim()
      .split(/ +/g);
    let text = args.slice(1).join(" ");
    let reversed = "";
    let i = text.length;
    while (i > 0) {
      reversed += text.substring(i - 1, i);
      i--;
    };
    if (!text) return message.reply("Please provide text to reverse.");
    message.reply(`Heres the reversed text of **${text}**: __${reversed}__`);
  },
};