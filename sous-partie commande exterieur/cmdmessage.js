const Discord = require("discord.js");
const VIP = [546679603255705601, 431039987337920513, 971429670446825482, 677970434918055936, 843824285867966485]
const casusbelli = require("../image/imagerandom.json");
const prefix = "U!";


module.exports.msgf = function (message) {
    premium = 0
    for (let step = 0; step < VIP.length; step++) {
        if (message.author.id == VIP[step]) {
            premium = 1
        }
    } if (message.content === "viens") {
        message.channel.send("viens jouer à lol")
    }
    /* renvoie des images random */
    else if (message.content === prefix + "image") {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        image_aléatoire = getRandomInt(21) // ressors 0,1,2 //il faut changer cette partie quand il y aura plus d'image dans imagerandom.json
        const embed = new Discord.MessageEmbed()
            //met une couleur su la barre de l'embed a gauche
            .setColor("#e59313")
            .setTitle(casusbelli.image[image_aléatoire].auteur) //s'occupe d'importer l'un des auteurs de imagerandom.json
            .setImage(casusbelli.image[image_aléatoire].image) //s'occupe d'importer une des images de imagerandom.json
        message.channel.send({ content: "voici une image : <@" + message.author.id + ">", ephemeral: false, fetchReply: true, embeds: [embed] });
    }
    /* renvoie des images random en DM*/
    else if (message.content === prefix + "imageDM") {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        image_aléatoire = getRandomInt(15) // ressors 0,1,2 //il faut changer cette partie quand il y aura plus d'image dans imagerandom.json
        const embed = new Discord.MessageEmbed()
            //met une couleur su la barre de l'embed a gauche
            .setColor("#e59313")
            .setTitle(casusbelli.image[image_aléatoire].auteur) //s'occupe d'importer l'un des auteurs de imagerandom.json
            .setImage(casusbelli.image[image_aléatoire].image) //s'occupe d'importer une des images de imagerandom.json
        message.author.send({ content: "voici une image : <@" + message.author.id + ">", ephemeral: false, fetchReply: true, embeds: [embed] });
        message.react('📸');
    }
    /* renvoie oui avec un mss en DM, dans le salon, et un emojie de react*/
    else if (message.content === "oui") {
        message.author.send({ content: "oe t'a trop raison", fetchReply: true });
        message.channel.send("je confirme la confirmation")
        message.react('✅');
    }
    else if (message.content === "non") {
        message.author.send({ content: "non c'est faux", fetchReply: true });
        message.channel.send("oe c'est faux")
        message.react('❌');
    }
    else if (message.content === "reel") {
        message.channel.send("reel")
        /*message.react('🗿');*/
    }
    else if (message.content === prefix + "help") {
        const embed = new Discord.MessageEmbed()
            //met une couleur su la barre de l'embed a gauche
            .setColor("#e59313")
            // titre de l'embed
            .setTitle("Liste des commandes : Cliquez ici pour voir en quoi consiste les commandes VIP")
            //met le nom de l'embed en un lien 
            .setURL("https://docs.google.com/document/d/13t0CecKqsOWoU1uKX4P0zV90MYyYg6XM5TpqnIfxYT4/edit?usp=sharing")
            .setAuthor({ name: 'Intercalaire', iconURL: 'https://cdn.discordapp.com/attachments/887262711094841374/1042489779440337006/IMG_20221106_120700_962.jpg' })
            .setDescription("Y'a la liste des commandes du bot")
            .setThumbnail("https://i.pinimg.com/564x/38/a5/72/38a57254cd8f4bc5baf9226864250183.jpg")
            .addField("U!help", "Affiche la liste des commandes")
            .addField("U!choix", "vous proposes une liste de minijeu")
            .addField("U!image", "vous proposes une image aléatoire")
            .addField("U!imageDM", "vous proposes une image aléatoire et vous l'envoie en DM")
            .addField("U!message", "vous renvoies la liste des commandes message possible")
            .addField("U!premium", "renvoie la liste des commandes possible pour les membres VIP")
            /*.setImage("")*/
            .setTimestamp()
            .setFooter({ text: "proposer moi des idées de commande et de rajout possible Intercalaire#8710" });


        message.channel.send({ embeds: [embed] });
    }
    else if (message.content === prefix + "message") {
        const embed = new Discord.MessageEmbed()
            //met une couleur su la barre de l'embed a gauche
            .setColor("#e59313")
            // titre de l'embed
            .setTitle("Liste des messages pas très importants")
            //met le nom de l'embed en un lien 
            .setAuthor({ name: 'Intercalaire', iconURL: 'https://cdn.discordapp.com/attachments/887262711094841374/1042489779440337006/IMG_20221106_120700_962.jpg' })
            .setDescription("Y'a la liste des messages pour le bot, si le prefixe n'est pas indiqué dans les commandes il ne faut pas le mettre.")
            .setThumbnail("https://i.pinimg.com/564x/38/a5/72/38a57254cd8f4bc5baf9226864250183.jpg")
            .addField("viens", "Affiche la liste des commandes")
            .addField("non", "confirme votre négation")
            .addField("oui", "confirme votre afirmation")
            .addField("aqua", "ping le celebre joueur aquafire")
            .addField("cc", "franchement l'active pas c plus chiant qu'autre chose")
            .addField("tatakae", "de la célèbre franchise: l'attaque des titans")
            /*.setImage("")*/
            .setTimestamp()
            .setFooter({ text: "proposer moi des idées de commande et de rajout possible Intercalaire#8710" });


        message.channel.send({ embeds: [embed] });
    }
    else if (message.content === "cc") {
        for (let step = 0; step < 25; step++) {
            message.author.send({ content: "t'es vraiment une grosse merde", fetchReply: true });
            message.react('🤗');
        }
    }

    /* ajoute un menu deroulant de choix, utiliser pour les minijeu*/
    else if (message.content === prefix + "choix") {

        var row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId("select")
                    .setPlaceholder("Selectionnez une option)")
                    .addOptions([
                        {
                            label: "premier mini jeu",
                            description: "paire ou impaire ?",
                            value: "option1",
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

        message.channel.send({ content: "menu de selection", components: [row] });
    }

    else if (message.content === prefix + "premium") {
        if (premium == 1) {
            const embed = new Discord.MessageEmbed()
                //met une couleur su la barre de l'embed a gauche
                .setColor("#e59313")
                // titre de l'embed
                .setTitle("Premium commande")
                //met le nom de l'embed en un lien 
                .setAuthor({ name: 'Intercalaire', iconURL: 'https://cdn.discordapp.com/attachments/887262711094841374/1042489779440337006/IMG_20221106_120700_962.jpg' })
                .setDescription("Y'a la liste des commandes VIP du bot")
                .setThumbnail("https://i.pinimg.com/564x/38/a5/72/38a57254cd8f4bc5baf9226864250183.jpg")
                .addField("U!jeu", "en cours de fabrication")


            message.channel.send({ embeds: [embed] });
        }
        else {
            message.channel.send("vous n'avez pas les permissions, nullos")
        }
    }
};