const axios = require("axios");
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  name: "animal",
  description: "Random Animals",
  run: async (client, message, args) => {
    const url = "https://some-random-api.ml/animal/";

    let fact, image, res;

    const array = [
      "dog",
      "cat",
      "panda",
      "fox",
      "red_panda",
      "koala",
      "bird",
      "raccoon",
      "kangaroo",
    ];
    const convert = {
      dog: "Dog",
      cat: "Cat",
      panda: "Panda",
      fox: "Fox",
      red_panda: "Red Panda",
      koala: "Koala",
      bird: "Bird",
      raccoon: "Raccoon",
      kangaroo: "Kangaroo",
    };
    const arrayRes = array[Math.floor(Math.random() * array.length)];
    const newUrl = `${url}${arrayRes}`;
    try {
      res = await axios.get(newUrl);
      image = res.data.image;
      fact = res.data.fact;
    } catch (e) {
      message.channel.send("An error occured, Please try again!");
    }
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Generate")
        .setStyle("Secondary")
        .setCustomId("ani")
        .setEmoji("🔁"),

      new ButtonBuilder()
        .setLabel("Close")
        .setStyle("Danger")
        .setCustomId("del")
        .setEmoji("🔒")
    );

    const dis = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Generate")
        .setStyle("Secondary")
        .setCustomId("ani")
        .setEmoji("🔁")
        .setDisabled(true),
      new ButtonBuilder()
        .setLabel("Close")
        .setStyle("Danger")
        .setCustomId("del")
        .setEmoji("🔒")
    );
    const em = new EmbedBuilder()
      .setTitle(`Some Random ${convert[arrayRes]} Image and Fact!`)
      .setDescription(fact)
      .setImage(image)
      .setTimestamp();
    let msg = await message.channel.send({
      embeds: [em],
      components: [row]
    });

    let filter = (i) => i.user.id === message.author.id;

    const collector = await msg.createMessageComponentCollector({

      filter,
      type: "BUTTON"
    });

    collector.on("collect", async (i) => {
      let filter = (i) => i.user.id === message.author.id;
      if (i.customId === "ani") {
        const url = "https://some-random-api.ml/animal/";

        let fact, image, res;

        const array = [
          "dog",
          "cat",
          "panda",
          "fox",
          "red_panda",
          "koala",
          "bird",
          "raccoon",
          "kangaroo",
        ];
        const convert = {
          dog: "Dog",
          cat: "Cat",
          panda: "Panda",
          fox: "Fox",
          red_panda: "Red Panda",
          koala: "Koala",
          bird: "Bird",
          raccoon: "Raccoon",
          kangaroo: "Kangaroo",
        };
        const arrayRes = array[Math.floor(Math.random() * array.length)];
        const newUrl = `${url}${arrayRes}`;
        try {
          res = await axios.get(newUrl);
          image = res.data.image;
          fact = res.data.fact;
        } catch (e) {
          message.channel.send("An error occured, Please try again!");
        }
        const em2 = new EmbedBuilder()
          .setTitle(`Some Random ${convert[arrayRes]} Image and Fact!`)
          .setDescription(fact)
          .setImage(image)
          .setTimestamp();
        return i.update({
          embeds: [em2]
        });
      }
      if (i.customId === "del") {
        return msg.delete();
      }
    });
  }
};

exports.name = "animal";