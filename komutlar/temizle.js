const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const sayi = args.slice(0).join(' ');


if(sayi.lenght < 1 ) {
  return message.reply("Silmem için bir miktar belirt")
}
else {
    message.channel.bulkDelete(sayi + 1);
message.channel.send("**" + sayi + "** adet mesaj sildim!").then(msg => {
    msg.delete("5000")
});
}


};







exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'temizle', //adını belirledik (kullanmak için gereken komut)
  description: 'Belirtilen miktarda mesaj siler', //açıklaması
  usage: 'temizle <miktar>' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz