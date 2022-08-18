const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You don't have permissions to do this!");
    let member = message.mentions.members.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!member) return message.channel.send("You didn't mention a member!");
    if (!reason) reason = "No reason specified!";
    member.kick()
        .then(() => {
            const kickemb = new Discord.EmbedBuilder()
                .setTitle("Kicked")
                .setColor([255, 77, 77])
                .addFields({ name: 'User', value: `${member}` })
                .addFields({ name: 'Reason', value: `${reason}` })
                .setThumbnail(message.author.displayAvatarURL())
                .setTimestamp();

            message.channel.send({ embeds: [kickemb] });
        })
        .catch((e) => {
            console.log(e);
            message.channel.send("Oops, something went wrong!");
        });
};
exports.name = "kick";