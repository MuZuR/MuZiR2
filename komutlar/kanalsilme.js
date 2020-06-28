const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Hey <@${message.author.id}>! Bu komutu için Yetkın Yok**`);
  
  message.channel.delete();
  
  message.guild.owner.send(`Kanal Sılındı Efendım Uyumayın Basıldık !!!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "kanal-sil",
  description: "Hangı Kanalda Yazarsanız O Kanalı Sıler",
  usage: "-kanalı-sil",
};