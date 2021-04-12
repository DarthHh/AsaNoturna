const Discord = require("discord.js");

exports.run = (client, message, args) => {
 
 var list = [
  'https://i.pinimg.com/originals/4b/3f/ec/4b3fec3892fe392ce1f82749015f9841.gif',
  'https://i.pinimg.com/originals/da/75/2b/da752b5e9869c21485278e52145251e9.gif',
  'http://pa1.narvii.com/5812/df953bfe5eb40184f09de633115e9bd48d9916b5_00.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
    .setTitle('Tomar água')
    .setColor('#583A0C')
    .setDescription(`${message.author} Acaba de tomar uma água`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter(`Comando feito por: ${message.author.username}`)
    
    message.channel.send(embed);
}                       