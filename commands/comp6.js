const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  var list = [
    `Murilocaos`,
    `Vinicaos`,
    `Caiocaos`,
    `Manur`
  ];


 /* var rand = list[Math.floor(Math.random() * list.length)];*/

  function shuffle(array) {
    
  let currentIndex = array.length
  let randomIndex;

  // Enquanto restar algum elemento para embaralhar...
  while (currentIndex != 0) {

    // Pegue um elemento disponível...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // E troque com os elementos atuais.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];

    array[3]
    
  }

  return array;
}

  
  message.channel.send(`<@${message.author.id}> roletou a russa e escolheu por...  ${shuffle(list)}`);

}