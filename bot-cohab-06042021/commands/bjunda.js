const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  var lucky = 'https://i.imgur.com/CTcesGT.gif'  
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user){
    return message.reply('marca um cohabento aí krl');
  }
  message.channel.send(`${message.author.username} **mamou** <@${user.id}>! :heart:`, {files:[lucky]});
}