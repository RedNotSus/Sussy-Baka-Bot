const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let member = message.mentions.members.first()
    if(!member) return message.reply("Mention someone to hack.")
    message.channel.send("**[5%]** Finding discord login... [2fa bypassed]").then(m => {
        setTimeout(() => {
            m.edit("**[15%]** Discord login found, finding ip..").then(m2 => {
                setTimeout(() => {
                    m2.edit("**[30%]** IP FOUND! looking for email and password..").then(m3 => {
                        setTimeout(() => {
                            m3.edit(`**[50%]** DONE! Email: ${member}@gmail.com｜Password: XuIsjgi9cg_`).then(m4 => {
                                setTimeout(() => {
                                    m4.edit("**[75%]** Installing trojan virus..").then(m5 => {
                                        setTimeout(() => {
                                            m5.edit(`**[100%]** Done hacking ${member}`).then(m6 => {
                                                setTimeout(() => {
                                                    m6.edit(`Sucessfully hacked ${member}`)
                                                }, 2100);
                                            })
                                        }, 4000);
                                    })
                                }, 1800);
                            })
                        }, 3100);
                    })
                }, 3200);
            })
        }, 2100);
    })
}
exports.name = "hack"