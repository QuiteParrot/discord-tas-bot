const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setDescription("**Louis Hoffman**")
.setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Louis_Hofmann_Hessischer_Film-_und_Kinopreis_2015.JPG/220px-Louis_Hofmann_Hessischer_Film-_und_Kinopreis_2015.JPG")
.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Louis_Hofmann_Hessischer_Film-_und_Kinopreis_2015.JPG/220px-Louis_Hofmann_Hessischer_Film-_und_Kinopreis_2015.JPG")
.setColor(0x00AE86)
.addField("Lakabı","Louis Hoffman(Jonas Kahnwald)",true)
.addField("Hayatı", 'Louis Hofmann (3 Haziran 1997) [1] 2011 Alman filmi Tom Sawyerde ilk olarak dikkat çeken ve genç Alman POW olarak rolüyle En İyi Yardımcı Erkek Oyuncu için Bodil Ödülü kazanan bir Alman aktördür. 2015 Danimarka filmi Land of Mine. Ayrıca 2017 Alman Netflix Orijinal serisinde, Dark rolüyle de tanınıyor.' , true)




message.channel.send(embed)

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'louishoffman', //adını belirledik (kullanmak için gereken komut)
  description: 'Louis Hoffman hakkında bilgi verir', //açıklaması
  usage: 'louishoffman' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz