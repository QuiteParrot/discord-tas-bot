const Discord = require('discord.js');




exports.run = async(client, message) => {
    let dönme = await message.channel.send({
           embed: {
               color: 0X00AE86,
                 description: `${message.author.tag} bir stres çarkı çevirdi`,
                 image: {
                     url:"https://i.imgur.com/KJJxVi4.gif"

                 }

           }

    });

    let bitiş = (Math.random( )* (60 - 5 +1)) + 5 ;
    setTimeout(() =>  {
        dönme.edit({
            embed: {
                color: 0X00AE86,
                description: `${message.author.tag}, stres çarkın ${bitiş.toFixed(2)} saniye döndü.     `
            }
         });   


    }, bitiş * 1000    ); 

   };     
    




exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'stresçarkı', //adını belirledik (kullanmak için gereken komut)
  description: 'Sizin için bir stres çarkı çevirir.', //açıklaması
  usage: 'stresçarkı' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz