const Discord = require('discord.js');

var myBot = new Discord.Client();
var prefix = "_";
var prefix1 = "//";

myBot.on("ready", () => {
    myBot.user.setPresence({ game : { name : '_aide', type: 0} });
    console.log("Bot sur une plage paumée");
})
myBot.login("NTUwMzI3ODQ1NTg3Nzc5NjA0.D2ad_Q.oE4ahxGbQ2WneOb1tRn-nK3Anng");
//Clear
myBot.on('message', message => {
    if(message.content.startsWith( prefix1 + "_clear")) {
        if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
    
        let args = message.content.split(" ").slice(1);
    
        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
            console.log("_Clear_ " + "utilisé par " + message.author.username);
    })
}
});
myBot.on('message', message => {
    if(message.content.startsWith( prefix1 + "_claar")) {
        let args = message.content.split(" ").slice(1);
    
        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
            console.log("_Clear_ " + "utilisé par " + message.author.username);
    })
}
});
myBot.on('message', data => {
    if (data.content === prefix1 + 'cat1'){
    data.channel.send('https://i.giphy.com/media/F0eb5L2xJJJNC/giphy.webp');
    console.log("_Cat1_");
}
});
myBot.on('message', data => {
    if (data.content === prefix1 + 'cat2'){
    data.channel.send('http://mississippi.m.i.pic.centerblog.net/d80ef475.gif');
    console.log("_Cat2_");
}
});
myBot.on('message', data => {
    if (data.content === prefix1 + 'dog1'){
    data.channel.send('https://media3.giphy.com/media/9Cn2niGNwj2lq/source.gif');
    console.log("_Dog1_");
}
});
myBot.on('message', data => {
    if (data.content === prefix1 + 'cat3'){
    data.channel.send('http://maguy69.m.a.pic.centerblog.net/1d004ad6.gif');
    console.log("_Cat3_");
}
});
myBot.on('message', data => {
    if (data.content === prefix1 + 'fairy'){
    data.channel.send('https://media1.tenor.com/images/6a8bfa6551752b27e031bd334a045623/tenor.gif');
    console.log("_Fairy_");
}
});
myBot.on('message', data => {
    if (data.content === prefix1 + 'stoplesbetises'){
    data.channel.send('http://moyeuvre.m.o.pic.centerblog.net/f1332077.gif');
    console.log("_Stop Les Bétises_");
}
});
myBot.on('message', data => {
    if (data.content === prefix1 + 'mdr'){
    data.channel.send('http://img.over-blog-kiwi.com/1/18/87/52/20170314/ob_50a1a3_mdr.gif');
    console.log("_MDR_");
}
});
//Aide
myBot.on('message', message => {
    if (message.content === prefix + 'aide'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**Les catégories d'Aides**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('Plusieurs commandes plus ou moins cools et utiles:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par TokoFurax')

       embed.addField('_gifs','permet de choisir un gif')
       .addField('_bot','permet de voir des liens pour rajouter le bot')
       .addField('_programs',"permet d'obtenir des liens plus ou moins en rapport avec la programmation")
       .addField('_admin',"permet d'obtenir la liste des commandes de modération")
       .addField('_myAvatar',"permet d'obtenir l'image de son compte Discord")

       message.channel.send({embed: embed});
       console.log("_Aide Menu_ " + "utilisé par " + message.author.username);
    }
});
//Gifs
myBot.on('message', message => {
    if (message.content === prefix + 'gifs'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La catégorie gifs**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('les gifs:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par TokoFurax')

       embed.addField('//cat1','permet de choisir un gif chat')
       .addField('//cat2','permet de choisir un gif chat qui lit')
       .addField('//cat3','permet de choisir le gif du chat botté')
       .addField('//dog1','permet de choisir un gif chien')
       .addField('//fairy','permet de choisir un gif chat')
       .addField('//stoplesbetises','permet de choisir un gif')
       .addField('//mdr','permet de choisir un gif mort de rire')

       message.channel.send({embed: embed});
       console.log("_Gifs_ " + "utilisé par " + message.author.username);
    }
});
//Programs
myBot.on('message', message => {
    if (message.content === prefix + 'programs'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La catégorie programs**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('les liens:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par TokoFurax')

       embed.addField('_rpg maker xp',"permet d'obtenir un lien pour RPG Maker XP gratuit, cracké, FR")
       .addField('_unity',"permet d'obtenir un lien pour télécharger Unity")
       .addField('_visual studio',"permet d'obtenir un lien pour Visual Studio Code")
       .addField('_python',"permet d'obtenir un lien pour Python")
       .addField('_bot pc',"permet d'obtenir un lien pour un tutoriel de création de bot sur pc")
       .addField('_bot android',"permet d'obtenir un lien pour un tutoriel de création de bot sur android")
       .addField('_photoshop crack',"permet d'obtenir un lien pour photoshop gratuit cracké")
       .addField('_KOD2TOU',"permet d'obtenir le lien du site de KOD2TOU")

       message.channel.send({embed: embed});
       console.log("_Programs_ " + "utilisé par " + message.author.username);
    }
});
//Admin
myBot.on('message', message => {
    if (message.content === prefix + 'admin'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La catégorie admin**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('les commandes:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par TokoFurax')

       embed.addField('//_clear',"permet de clean le chat. Utilisation: //_clear + nombre entre 0 et 100 mais besoins de perms")
       .addField('//_claar',"permet de clean le chat. Utilisation: //_clear + nombre entre 0 et 100 et pas besoins de perms")
       .addField('//_TokoFurax',"permet d'afficher l'image de profil de TokoFurax")
       .addField('//_INFINITI',"permet d'afficher l'image de profil de INFINITY")
       .addField('//_Humanoïde.exe',"permet d'afficher l'image de profil de humanoïde.exe")
       .addField('_ban',"permet de ban un utilisateur")
       .addField('_kick',"permet de éjecter un utilisateur")

       message.channel.send({embed: embed});
       console.log("_ADMIN_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix1 + '_TokoFurax'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setColor(3446023)
       .setImage('https://media.discordapp.net/attachments/555377771577081857/555378797365428224/big-4538792063.jpg?width=887&height=499')

       message.channel.send({embed: embed});
       console.log("_TokoFurax_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'rpg maker xp'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**RPG Maker XP Crack**')
       .setImage('http://d289qh4hsbjjw7.cloudfront.net/rpgmaker-20130522223546811/files/wallpaper-rpg-maker-xp-type-a.jpg')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('RPG Maker XP lien 1', 'http://www.final-rpg.com/rpg_maker_xp-telecharger-installation.html')
       .addField('RPG Maker XP lien 2', 'http://www.mediafire.com/file/fzl5rz6asgj1ppk/rpg_maker_xp.rar')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('les liens pour télécharger RPG Maker xp en crack fr (il faut télécharger les deux)')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_RPG Maker XP_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'unity'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**Unity**')
       .setImage('https://udemy-images.udemy.com/course/750x422/1210008_6859.jpg')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Unity', 'https://store.unity.com/download?ref=personal')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour télécharger Unity')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_Unity_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'KOD2TOU'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**KOD2TOU**')
       .setImage('https://image.jimcdn.com/app/cms/image/transf/dimension=287x10000:format=jpg/path/s2dfa13bdc82322ff/image/iaf03515eaaf7bcd1/version/1552065221/image.jpg')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Le site', 'http://kod2tou.cf')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour visiter notre site internet (la majoritée des liens y sont téléchargeablent)')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_KOD2TOU_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'bot pc'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3486023)
       .setTitle('**Créer un bot sur PC**')
       .setDescription("lien d'une vidéo sur comment créer un bot sur PC")
       .addField('Lien de la vidéo', 'https://www.youtube.com/watch?v=FMijzVzh4MQ&t=1s')
       .setImage('https://i.pinimg.com/564x/a1/6e/a7/a16ea7fa2bf36211e03461d9194ebefa.jpg')
       .setTimestamp()

       message.channel.send({embed: embed});
       console.log("_Bot PC_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'bot android'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3486023)
       .setTitle('**Créer un bot sous Android**')
       .setDescription("lien d'une vidéo sur comment créer un bot sous android")
       .addField('Lien de la vidéo', 'https://www.youtube.com/watch?v=XkIBT1ONfOc')
       .setImage('https://i.pinimg.com/564x/1e/75/6f/1e756fe2b578ce50b21fe0324eeb92d1.jpg')
       .setTimestamp()

       message.channel.send({embed: embed});
       console.log("_Bot Android_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'photoshop crack'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3486023)
       .setTitle('**Cracker photoshop**')
       .setDescription("lien d'une vidéo sur comment cracker photoshop")
       .addField('Lien de la vidéo', 'https://www.youtube.com/watch?v=CI5zI-1XjYM')
       .setImage('https://i.pinimg.com/564x/49/44/11/494411208bf0fce82aa0f1964c2d9bf3.jpg')
       .setTimestamp()

       message.channel.send({embed: embed});
       console.log("_Photoshop crack_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'python'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**Python**')
       .setImage('https://static.oc-static.com/prod/courses/illustrations/illu_apprenez-a-programmer-en-python.png')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Télécharger Python', 'https://www.python.org/downloads/')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour télécharger Python')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_Python_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'visual studio'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**Visual Sudio Code**')
       .setImage('https://miro.medium.com/max/910/0*vyFBOV8lCa-22XvM.png')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Télécharger Visual Studio Code', 'https://code.visualstudio.com/')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour télécharger Visual Studio Code')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_Visual Studio Code_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix1 + '_INFINITY'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setColor(3446023)
       .setImage('https://media.discordapp.net/attachments/555377771577081857/555380166629654528/b3c8666dd086d5158e404ef7bd0452e9.png')

       message.channel.send({embed: embed});
       console.log("_INFINITY_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix1 + '_Humanoïde.exe'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setColor(3446023)
       .setImage('https://media.discordapp.net/attachments/555377771577081857/555380196308418590/8f57cf524b723c9ac28baca18e7748f8.png')

       message.channel.send({embed: embed});
       console.log("_humanoïde.exe_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('_ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'Non respect des règles du Serveur!',
          }).then(() => {
            message.reply(`BAN réussi: ${user.tag}`);
          }).catch(err => {
            message.reply('Je ne suis pas capable de ban cet utilisateur');
            console.error(err);
          });
        } else {
          message.reply("Cet utilisateur n'est pas dans le serveur!");
        }
      } else {
        message.reply("Tu n'as pas le role suffisant pour BAN un utilisateur!");
      }
    }
});
myBot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('_kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Non respect des règles du serveur!').then(() => {
            message.reply(`KICK réussi: ${user.tag}`);
          }).catch(err => {
            message.reply('Je ne suis pas capable de kick cette personne!');
            console.error(err);
          });
        } else {
          message.reply("Cet utilisateur n'est pas dans le serveur!");
        }
      } else {
        message.reply("Tu n'as pas le role suffisant pour KICK un utilisateur!");
      }
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'bot'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**TokoBot**')
       .setImage('https://media.discordapp.net/attachments/555377771577081857/555421068773556228/377757.jpg?width=887&height=499')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Merci de rejoidre le serveur de mon créateur', 'https://discord.gg/WyCSTS2')
       .addField('Me rajouter dans votre serveur', 'https://discordapp.com/oauth2/authorize?client_id=550327845587779604&permissions=8&scope=bot')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour rajouter le bot')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log('**_RAJOUT DU BOT_ **' + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === '_myAvatar') {
      message.reply(message.author.avatarURL);
      console.log("Avatar");
    }
});
myBot.on('message', msg => {
    if(msg.content[0] === prefix) {
        if(msg.content === prefix + '__KOD2TOU') {
            let role = msg.guild.roles.find('name', '</ 👑CREATEUR>')
            if(msg.member.roles.find('name', '</ 👑CREATEUR>')) {
                msg.member.removeRole(role)
                msg.reply("Vous n'avez plus le rôle: </ 👑CREATEUR>")
            }
            else {
                msg.member.addRole(role)
                msg.reply("Vous venez d'obtenir le rôle: </ 👑CREATEUR>")
            }
        }
    }
});
