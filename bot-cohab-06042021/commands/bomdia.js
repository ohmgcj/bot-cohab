const Discord = require("discord.js");
exports.run = async (client, message, args ) => {
  var list = [
    'https://imgur.com/9uSAWCx.jpg',
    'https://imgur.com/eCqEqOh.jpg',
    'https://imgur.com/TRh8QFM.jpg',
    'https://imgur.com/TXFxvdW.jpg',
    'https://imgur.com/klmSohH'
  ]

  var rand = list[Math.floor(Math.random() * list.length)]
  message.channel.send({files:[rand]})
}