const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Yetkin yok")
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('**Kullanamazsın**')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimi atıcağımı yazmadın.').catch(console.error);
  
  let member = message.guild.member(user)
  if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Kendi yetkimin üstündeki kişileri yasaklayamam.`)
  message.guild.member(user).ban();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('**Yasaklanan**', `${user.username}#${user.discriminator}`)
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'ban [kullanıcı] [sebep]'
};