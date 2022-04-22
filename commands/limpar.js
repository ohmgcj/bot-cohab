const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "tá chapado das idéia mlk? só <@&702706624485130261>, <@&774444371427983410> e <@&712091128484069417>, podem botar ordem nessa porra :rofl::thumbsup: "
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
      "de **0** á **99 mensagens** quer que eu apague qnts?"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens apagadas.**`).then(msg => msg.delete({timeout: 20000}));
  message.channel
    .send(`Vai se fuder @everyone`)/*.then(msg => msg.delete({timeout: 15000}))*/.catch(error =>
      console.log(`Essa porra não deixou eu apagar: ${error}`)
    );
};