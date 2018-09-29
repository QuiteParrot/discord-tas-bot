const Discord = require('discord.js');


exports.run = function(client, message, args) {
const mesaj = args.slice(0).join(' ')
if (mesaj < 1) {
message.reply("Yazmam için bir şey belirt")

} else {
    message.delete();
    message.channel.send(mesaj)


}


    

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['ping','p'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'yaz', //adını belirledik (kullanmak için gereken komut)
  description: 'Bota istediğinizi yazdırır', //açıklaması
  usage: 'yaz <mesaj>' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz