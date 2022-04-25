const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  var lucky = 'https://i.imgur.com/CTcesGT.gif'  
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (args == "qualquer") {
    var qualquer =  args;
    message.guild.members.fetch()
      .then(allMembers => {
         const member = allMembers.random();
         message.channel.send(`${message.author.username} **mamou** ${member.toString()}! :heart:`, {files:[lucky]});
      })
  }
  if (!!user) {
  message.channel.send(`${message.author.username} **salvou** <@${user.id}>! :heart:`, {files:[lucky]});
  }
  if (!user && !qualquer) {
    return message.reply('marca um cohabento aí krl');
  }
}