const Discord = require('discord.js');


exports.run = function(client, message) {

message.channel.send("Bot Yeniden Başlatılıyor").then(msg => {
    console.log("[BOT]Yeniden Başlatılıyor");
    process.exit(0);
});


};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 3 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'reboot', //adını belirledik (kullanmak için gereken komut)
  description: 'Botu yeniden başlatır', //açıklaması
  usage: 'reboot' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz