const Discord = require("discord.js");
const { Permissions } = require('discord.js');
const bdd = require("./bdd/bdd.json");
const casusbelli = require("./casusbelli/imagerandom.json");


const {Client, GatewayIntentBits} = require("discord.js");

const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { message } = require("prompt");

const client = new Client({  
  intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
  ]
});

client.login("OTcxNDI5NjcwNDQ2ODI1NDgy.GlnrVy.tbsUQHDzy2hQJAYxdadRQ9_BVBCpHY696uG24s") //obligatoire pour mon bot

const prefix = "U!";
/*gère le bot a la base avec son activité*/
client.on("ready", () => {
    console.log("bot opérationnel");
    
    client.user.setActivity(`use U!help`, {type: "PLAYING"}); //PLAYING/WATCHING marche aussi a la place de WATCHING/PLAYING
    
   
    /*Client.user.setPresence({
      status: 'online', //met le bot en ligne (avec le contour en vert par exemple 'dns' met en rouge ( ne pas deranger))
      activities: [{
          name: "En train d'être coder",
          type: 'playing'
      }]
    });*/
  });


/* renvoie des images random */
client.on("messageCreate", message =>{
  if(message.content ===prefix + "image"){
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
      image_aléatoire = getRandomInt(15) // ressors 0,1,2 //il faut changer cette partie quand il y aura plus d'image dans imagerandom.json
      console.log(image_aléatoire)
      const embed = new Discord.MessageEmbed()
      //met une couleur su la barre de l'embed a gauche
      .setColor("#e59313")
      .setTitle(casusbelli.image[image_aléatoire].auteur) //s'occupe d'importer l'un des auteurs de imagerandom.json
      .setImage(casusbelli.image[image_aléatoire].image) //s'occupe d'importer une des images de imagerandom.json
      message.channel.send({content: "voici une image : <@" + message.author.id + ">", ephemeral: false, fetchReply: true, embeds: [embed]});
    }
});
client.on("messageCreate", message =>{
  if(message.content ===prefix + "imageDM"){
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
      image_aléatoire = getRandomInt(15) // ressors 0,1,2 //il faut changer cette partie quand il y aura plus d'image dans imagerandom.json
      console.log(image_aléatoire)
      const embed = new Discord.MessageEmbed()
      //met une couleur su la barre de l'embed a gauche
      .setColor("#e59313")
      .setTitle(casusbelli.image[image_aléatoire].auteur) //s'occupe d'importer l'un des auteurs de imagerandom.json
      .setImage(casusbelli.image[image_aléatoire].image) //s'occupe d'importer une des images de imagerandom.json
      message.author.send({content: "voici une image : <@" + message.author.id + ">", ephemeral: false, fetchReply: true, embeds: [embed]});
      message.react('📸');
    }
  });

client.on("messageCreate", message => {
  if(message.content ==="oui"){
    message.author.send({ content: "oe t'a trop raison", fetchReply: true});
    message.channel.send("je confirme la confirmation")
    message.react('✅');
}});
client.on("messageCreate", message => {
  if(message.content ==="non"){
    message.author.send({ content: "non c'est faux", fetchReply: true});
    message.channel.send("oe c'est faux")
    message.react('❌');
}});

client.on("messageCreate", message => {
  if(message.content ==="aqua"){
      message.channel.send("c'est lui !<@546679603255705601>")
      /*message.react('🗿');*/
}});
  client.on("messageCreate", message => {
    if(message.content ==="viens"){
        message.channel.send("viens jouer à lol")
}});

client.on("messageCreate", message => {
    if (message.author.bot) return;
    if(message.content ==="tatakae"){
    message.reply("tatakae à toi aussi mon frère")
        
    }
    //U!help
    else if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            //met une couleur su la barre de l'embed a gauche
            .setColor("#e59313")
            // titre de l'embed
            .setTitle("Liste des commandes")
            //met le nom de l'embed en un lien 
            .setURL("https://www.youtube.com/watch?v=-xwZwEcO9R0&list=RDMMj9QQ9dqUY0M&index=4")
            .setAuthor({ name: 'Intercalaire', iconURL: 'https://i.pinimg.com/564x/8f/41/06/8f41069e41791eb550b6eaac98ebdade.jpg'})
            .setDescription("Y'a la liste des commandes du bot")
            .setThumbnail("https://i.pinimg.com/564x/38/a5/72/38a57254cd8f4bc5baf9226864250183.jpg")
            .addField("U!help", "Affiche la liste des commandes")
            .addField("U!choix","vous proposes une liste de minijeu")
            .addField("U!image", "vous proposes une image aléatoire")
            .addField("U!imageDM", "vous proposes une image aléatoire et vous l'envoie en DM")
            /*.setImage("")*/
            .setTimestamp()
            .setFooter({ text: "proposer moi des idées de commande et de rajout possible Intercalaire#0003"});

          
        message.channel.send({ embeds: [embed]});
    }
});

//crée un onglet pour y faire des choix
client.on("messageCreate", message => {
  if(message.author.bot) return;
  if(message.content === prefix + "choix"){

    var row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId("select")
          .setPlaceholder("Selectionnez une option)")
          .addOptions([
            {
                label: "premier mini jeu",
                description:"paire ou impaire ?",
                value:"option1",          
            },
            {
              label: "second mini jeu",
              description: "Shonen, shojo ou seinen",
              value: "option2",
            },
            {
              label: "troisieme mini jeu",
              description: "...",
              value: "option3",
            }
          ])
      );

    message.channel.send({content: "menu de selection", components: [row]});

}});

//complément de l'onglet crée + partie minijeu
client.on("interactionCreate", interaction => {
    if(interaction.isSelectMenu()){
      if(interaction.customId === "select"){
        console.log(interaction.values);

        if(interaction.values == "option1"){
          interaction.reply({content: "Vous avez séléctionné l'option une" + " " + " ,mini jeu 1: choisissez si le nombre aleatoire sera paire ou impaire (pour cela ecriver juste paire ou impaire dans le tchat)" , ephemeral: false});
        
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }
        nombre_aléatoire = getRandomInt(2) // ressors 0 ou 1
        console.log(nombre_aléatoire)
        client.on("messageCreate", message =>{
          if(message.content ==="paire"){
              if(nombre_aléatoire == 0){
                message.reply("gg");
            }else{
              message.reply("tu as perdu");
            }
          }
          
            else if(message.content ==="impaire"){
                if(nombre_aléatoire == 1){
                  message.reply("gg");
              }else{
                message.reply("tu as perdu");
              }
              
            
            }
          }
        )};
          

        
        //fais appel aux boutons ( reste du code un peu plus bas)
        if(interaction.values == "option2"){
          var row = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
              .setCustomId("bouton choix facile")
              .setLabel('lancer le jeu')
              .setStyle("DANGER"),
          )
        /*  .addComponents(new Discord.MessageButton()
              .setCustomId("bouton choix moyen")
              .setLabel('choix moyen')
              .setStyle("DANGER"),
          )
          .addComponents(new Discord.MessageButton()
              .setCustomId("bouton choix difficile")
              .setLabel('choix difficile')
              .setStyle("DANGER"),
          )*/
          .addComponents(new Discord.MessageButton() //crée un bouton aide qui na pas besoin d'id custom !!!
          .setLabel('choix aide')
          .setStyle("LINK")
          .setURL("https://www.fnac.com/Shojo-Shonen-Seinen-quels-sont-les-differents-types-de-manga/cp45821/w-4"),
          );

          interaction.reply({content: "Vous avez séléctionné le deuxieme minijeu " + ", celui consiste en le choix de 3 propositions ( shonen, shojo ou seinen) vous allez avoir le titre du manga avec une image d'illustration et son résumé ( en provenence de nautiljon) a vous de devinez de quelle catégorie fais partie celui-ci. vous avec une aide de definition si vous ne savait pas ce que veut dire 'shonen,shojo et seinen'🐱‍🐉 ", ephemeral: false, components: [row]});
        };
        if(interaction.values == "option3"){
          interaction.reply({content: "Vous avez séléctionné l'option trois " + ", je cherche une idée pour un minijeu ( si tu en a une viens me la dire Intercalaire#0003)", ephemeral: true});
        }
      }
    }
    });
  // complement du deuxieme minijeu, il gere les boutons avec les id custom et s'occupe aussi du choix de categorie choisi par l'utilisateur il renverra un manga/anime random avec le questionnaire
client.on("interactionCreate", interaction => {
      if(interaction.isButton()){
        if(interaction.customId === "bouton choix facile"){
          var row = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonshonenfac')
              .setLabel('shonen')
              .setStyle("DANGER")
              .setEmoji("👦"),
          )
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonshojofac')
              .setLabel('shojo')
              .setStyle("DANGER")
              .setEmoji("👧"),
          )
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonseinenfac')
              .setLabel('seinen')
              .setStyle("DANGER")
              .setEmoji("🧑"),
          )
          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          facile_embed = getRandomInt(102) // ressors 0 ou 1,... => 101
          console.log(facile_embed)
          const embed = new Discord.MessageEmbed()
          //met une couleur su la barre de l'embed a gauche
          .setColor("#e59313")
          // titre de l'embed
          .setTitle(bdd.facile[facile_embed].nom) //importe le titre de bdd.json et a l'aide d'un nombre aléatoire il prend un des tableau en random
          .setDescription(bdd.facile[facile_embed].description) //importe la description de bdd.json et a l'aide d'un nombre aléatoire il prend un des tableau en random
          .setImage(bdd.facile[facile_embed].image) //importe l'image de bdd.json et a l'aide d'un nombre aléatoire il prend un des tableau en random
          interaction.reply({content: "vous avez lancer le jeu", ephemeral: false, embeds: [embed], components: [row]});
        }}});
        /*if(interaction.customId === "bouton choix moyen"){
          var row = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonshonenmoy')
              .setLabel('shonen')
              .setStyle("DANGER")
              .setEmoji("👦"),
          )
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonshojomoy')
              .setLabel('shojo')
              .setStyle("DANGER")
              .setEmoji("👧"),
          )
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonseinenmoy')
              .setLabel('seinen')
              .setStyle("DANGER")
              .setEmoji("🧑"),
          )
          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          moyen_embed = getRandomInt(6) // ressors 0 ou 1,... => 5
          console.log(moyen_embed)
          const embed = new Discord.MessageEmbed()
          .setColor("#e59313")
          .setTitle(moyen.moyen[moyen_embed].nom)
          .setDescription(moyen.moyen[moyen_embed].description)
          .setImage(moyen.moyen[moyen_embed].image)
          interaction.reply({content: "bouton appuyer moyen", ephemeral: false, embeds: [embed], components: [row]});
        };
        if(interaction.customId === "bouton choix difficile"){
          var row = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonshonendif')
              .setLabel('shonen')
              .setStyle("DANGER")
              .setEmoji("👦"),
          )
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonshojodif')
              .setLabel('shojo')
              .setStyle("DANGER")
              .setEmoji("👧"),
          )
          .addComponents(new Discord.MessageButton()
              .setCustomId('boutonseinendif')
              .setLabel('seinen')
              .setStyle("DANGER")
              .setEmoji("🧑"),
          )
          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          difficile_embed = getRandomInt(2) // ressors 0 ou 1
          console.log(difficile_embed)
          const embed = new Discord.MessageEmbed()
          .setColor("#e59313")
          .setTitle(difficile.difficile[difficile_embed].nom)
          .setDescription(difficile.difficile[difficile_embed].description)
          .setImage(difficile.difficile[difficile_embed].image)
          interaction.reply({content: "bouton appuyer difficile", ephemeral: false, embeds: [embed], components: [row]});
        };

        }
      })
        /*va test pour chaque difficuter chaque bouton et si le selectionnez est bien le bon*/
        client.on("interactionCreate", interaction => {
          if(interaction.isButton()){
            if(interaction.customId === "boutonshonenfac"){
              if(bdd.facile[facile_embed].genre === "shonen"){
                var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId("bouton choix facile")
                    .setLabel('relancer le jeu')
                    .setStyle("DANGER"),
                )
                interaction.reply({content: "gagné: <@" + interaction.user + "> c'etait bien " + bdd.facile[facile_embed].genre, ephemeral: false, components: [row]});
            }
            else{
              var row = new Discord.MessageActionRow()
              .addComponents(new Discord.MessageButton()
                  .setCustomId("bouton choix facile")
                  .setLabel('relancer le jeu')
                  .setStyle("DANGER"),
              )
              interaction.reply({content: "perdu: <@" + interaction.user + "> ce n'etait pas shonen mais " + bdd.facile[facile_embed].genre, ephemeral: false, components: [row]});
              interaction.user.send("Ptdr t tro nul");
            }
          }
            if(interaction.customId === "boutonshojofac"){
              if(bdd.facile[facile_embed].genre === "shojo"){
                var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId("bouton choix facile")
                    .setLabel('relancer le jeu')
                    .setStyle("DANGER"),
                )
                interaction.reply({content: "gagné: <@" + interaction.user + "> c'etait bien " + bdd.facile[facile_embed].genre, ephemeral: false, components: [row]});
            }
            else{
              var row = new Discord.MessageActionRow()
              .addComponents(new Discord.MessageButton()
                  .setCustomId("bouton choix facile")
                  .setLabel('relancer le jeu')
                  .setStyle("DANGER"),
              )
              interaction.reply({content: "perdu: <@" + interaction.user + "> ce n'etait pas shojo mais " + bdd.facile[facile_embed].genre, ephemeral: false, components: [row]});
              interaction.user.send("Ptdr t tro nul");
            }
          }
          
          if(interaction.customId === "boutonseinenfac"){
            if(bdd.facile[facile_embed].genre === "seinen"){
              var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId("bouton choix facile")
                    .setLabel('relancer le jeu')
                    .setStyle("DANGER"),
                )
                interaction.reply({content: "gagné: <@" + interaction.user + "> c'etait bien " + bdd.facile[facile_embed].genre, ephemeral: false, components: [row]});
            }
          else{
            var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("bouton choix facile")
                .setLabel('relancer le jeu')
                .setStyle("DANGER"),
            )
            interaction.reply({content: "perdu: <@" + interaction.user + "> ce n'etait pas seinen mais " + bdd.facile[facile_embed].genre, ephemeral: false, components: [row]});
            interaction.user.send("Ptdr t tro nul");
          }
        }}});   
        
   /* if(interaction.customId === "bouton choix moyen"){
      if(interaction.customId === "boutonshonenmoy"){
        if(moyen.moyen[moyen_embed].genre === "shonen"){
          interaction.reply("bien deviner")
      }
      else{
        interaction.reply("perdu")
      }
    }
      if(interaction.customId === "boutonshojomoy"){
        if(moyen.moyen[moyen_embed].genre === "shojo"){
          interaction.reply("bien deviner")
      }
      else{
        interaction.reply("perdu")
      }
    }
    
    if(interaction.customId === "boutonseinenmoy"){
      if(moyen.moyen[moyen_embed].genre === "seinen"){
        interaction.reply("bien deviner")
    }
    else{
      interaction.reply("perdu")
    }
  }        
  
    }
    if(interaction.customId === "bouton choix difficile"){
      if(interaction.customId === "boutonshonendif"){
        if(difficile.difficile[difficile_embed].genre === "shonen"){
          interaction.reply("bien deviner")
      }
      else{
        interaction.reply("perdu")
      }
    }
      if(interaction.customId === "boutonshojodif"){
        if(difficile.difficile[difficile_embed].genre === "shojo"){
          interaction.reply("bien deviner")
      }
      else{
        interaction.reply("perdu")
      }
    }
    
    if(interaction.customId === "boutonseinendif"){
      if(difficile.difficile[difficile_embed].genre === "seinen"){
        interaction.reply("bien deviner")
    }
    else{
      interaction.reply("perdu")
    }
  }        
  
    }
      }});*/









    /* permet de give un role quand on met 'give @nom du joueur' (plus mettre l'id du role dans le code)*/





/* 
client.on('message', (message) => {
    if (message.content.startsWith(`give`)){
    let mention = message.mentions.members.first();
     
    if(mention == undefined){
    message.reply(`Veuillez mentionner un membre.`)
    }else{
    mention.roles.add("934106108782608394")
    }
    }
    });

    Client.on('message', (message) => {
      if (message.content.startsWith(`prendre`)){
      let mention = message.mentions.members.first();
       
      if(mention == undefined){
      message.reply(`Veuillez mentionner un membre.`)
      }else{
      mention.roles.remove("934106108782608394")
      }
      }
      });

/*permet de ban les membres*/
/*Client.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  if(message.member.permissions.has("ADMINISTRATOR")){
      if(message.content.startsWith(prefix + "ban")){
        let mention = message.mentions.members.first();

        if(mention ==undefined){
          message.reply(",Membre non ou mal mentionné, re test frero")
        }
        else{
          if(mention.bannable){
            mention.ban();
            message.channel.send(mention.displayName + ",et hop à pu");

          }
          else{
            message.reply(",ptdr il est pas bannable")
          }
        }
      }
  }
});
/*permet de kick les membres*/
/*Client.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  if(message.member.permissions.has("ADMINISTRATOR")){
      if(message.content.startsWith(prefix + "kick")){
        let mention = message.mentions.members.first();

        if(mention ==undefined){
          message.reply(",Membre non ou mal mentionné, re test frero")
        }
        else{
          if(mention.kick){
            mention.kick();
            message.channel.send(mention.displayName + ",1,2,3 disparitus maximus");

          }
          else{
            message.reply(",ptdr il est pas kickable")
          }
        }
      }
  }
});*/
