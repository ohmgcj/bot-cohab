const Discord = require("discord.js");
exports.run = async (_client, message, _args) => {
  var list = [
    'https://imgur.com/9uSAWCx.jpg',
    'https://imgur.com/eCqEqOh.jpg',
    'https://imgur.com/TRh8QFM.jpg',
    'https://imgur.com/TXFxvdW.jpg'
  ]
  var rand = list[Math.floor(Math.random() * list.length)]
  message.channel.send({files:[rand]})
}