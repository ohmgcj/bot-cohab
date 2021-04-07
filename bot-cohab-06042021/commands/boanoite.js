const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  var list = [
    'https://imgur.com/nma5skK.jpg',
  ];
  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user){
    return message.reply('marca um cohabento aí krl');
  }
  message.channel.send(`${message.author.username}, Desejou **"Só noite!"**, para: ${user.username}! :maple_leaf::nauseated_face: :dash:`, {files:[rand]});
}