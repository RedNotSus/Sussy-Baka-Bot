const { MessageEmbed } = require('discord.js') // Import the MessageEmbed class from the discord.js module

module.exports = {
    name: 'choose',
    usage: '-choose [stuff]',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.content.includes(',')) {
            const argarray = args.join(' ').split(',')
            return message.reply({
                content: `${
                    argarray[Math.floor(Math.random() * argarray.length)]
                }`
            })
        } else
            return message.reply({
                content: `${
                    args[Math.floor(Math.random() * args.length)]
                }`,
            })
    },
};