const axios = require("axios");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
const embed = MessageEmbed;
const component = MessageActionRow;
const button =  MessageButton;
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
    const row = new component().addComponents(
   new button()
   .setLabel("Generate")
   .setStyle("SECONDARY")
   .setCustomId("ani")
   .setEmoji("🔁"),
       
    new button()
   .setLabel("Close")
   .setStyle("DANGER")
   .setCustomId("del")
   .setEmoji("🔒")
   )
   
   const dis = new component().addComponents(
   new button()
   .setLabel("Generate")
   .setStyle("SECONDARY")
   .setCustomId("ani")
   .setEmoji("🔁")
   .setDisabled(true),
    new button()
   .setLabel("Close")
   .setStyle("DANGER")
   .setCustomId("del")
   .setEmoji("🔒")
   )
    const em = new MessageEmbed()
      .setTitle(`Some Random ${convert[arrayRes]} Image and Fact!`)
      .setDescription(fact)
      .setImage(image)
      .setTimestamp();
     let msg = await message.channel.send({
      embeds: [em],
     components: [row]
      })  

let filter = (i) => i.user.id === message.author.id;
       
const collector = await msg.createMessageComponentCollector({

    filter,
    type: "BUTTON"
})       
  
collector.on("collect", async (i) =>{
  let filter = (i) => i.user.id === message.author.id;
    if(i.customId === "ani") {
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
   const em2 = new MessageEmbed()
      .setTitle(`Some Random ${convert[arrayRes]} Image and Fact!`)
      .setDescription(fact)
      .setImage(image)
      .setTimestamp();  
    return i.update({
      embeds: [em2]
    })}
    if(i.customId === "del") {
    return msg.delete();
    }})}};

exports.name = "animal"