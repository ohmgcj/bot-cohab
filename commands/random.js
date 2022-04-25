const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    message.guild.members.fetch()
      .then(allMembers => {
         const member = allMembers.random();
         message.channel.send(member.toString());
      })
}