const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

let pre = ayarlar.prefix

exports.run = (client, message, args) => {

  
const embed = new Discord.RichEmbed()

.setColor('RANDOM')
.addField(`İşte Prefixim`,`${pre}yardım`)

 message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'prefix-ne'
}