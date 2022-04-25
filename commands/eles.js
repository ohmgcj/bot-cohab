const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  var list = [
    'https://imgur.com/YTjr5c5.jpg',//Kauã
    'https://imgur.com/vKCkjUw.jpg',//Caio
    'https://imgur.com/0DNHTrN.jpg',//Vini
    'https://imgur.com/vz6j9Td.jpg',//Murilo
    'https://imgur.com/SFqv148.jpg'//Manu
  ];
  var rand = list[Math.floor(Math.random() * list.length)];

  if (rand === 'https://imgur.com/YTjr5c5.jpg'){
    user = `<@240192535862050817>`
  }
  if (rand === 'https://imgur.com/vKCkjUw.jpg'){
    user = `<@265530686696456192>` //Caio
  }
  if (rand === 'https://imgur.com/0DNHTrN.jpg'){
    user = `<@704883891722256455>` //Vini
  }
  if (rand === 'https://imgur.com/vz6j9Td.jpg'){
    user = `<@361051494000230421>` //Murilo
  }
  if (rand === 'https://imgur.com/SFqv148.jpg'){
    user = `<@402963443847659533>` //Manu
  }
  
  // let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  //if (!user){
  //  return message.reply('marca um cohabento aí krl');
  //}
  message.channel.send(`<@${message.author.id}> roletou a russa e escolheu por... ${user}! :heart:`, {files:[rand]});
}