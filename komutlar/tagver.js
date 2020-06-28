const Discord = require("discord.js")

exports.run = async(client, message, args) => {

let kobs = args[0]
if(!kobs) return message.channel.send(`**Herkese vereceğim tagı belirtmelisin**`)

message.guild.members.forEach(a => {
a.setNickname(kobs + a.username)
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Başarıyla ${kobs} tagını herkese verdim.`)

message.channel.send(embed)
})
};

exports.conf = { 
 enabled: true, 
 guildOnly: false, 
 aliases: [], 
 permLevel: 0 
};

exports.help = { 
 name: 'herkese-tag-ver', 
 description: 'Herkese tag verirsiniz.',
usage: 'herkese-tag-ver <Tag>' 
};