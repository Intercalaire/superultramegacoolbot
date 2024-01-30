const Discord = require("discord.js");
const { Permissions } = require('discord.js');
const bdd = require("../bdd/bdd.json");
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});
const VIP = [546679603255705601, 431039987337920513, 971429670446825482, 677970434918055936, 843824285867966485, 439140770499526657]


module.exports.minijeu2f = function (interaction) {
    if (interaction.isButton()) {
        if (interaction.customId === "bouton choix manga") {
            var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId('boutonshonenfac')
                    .setLabel('shonen')
                    .setStyle("PRIMARY")
                    .setEmoji("👦"),
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId('boutonshojofac')
                    .setLabel('shojo')
                    .setStyle("PRIMARY")
                    .setEmoji("👧"),
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId('boutonseinenfac')
                    .setLabel('seinen')
                    .setStyle("PRIMARY")
                    .setEmoji("🧑"),
                )
            function getRandomInt(max) {                                               // de la 
                return Math.floor(Math.random() * max);
            }
            premium = 0
            for (let step = 0; step < VIP.length; step++) {
                if (interaction.user.id == VIP[step]) {
                    premium = 1
                }
            }
            if (premium == 1) {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }
                interaction.user.minijeudeux = getRandomInt(121) // ressors 0 ou 1,... => 120      // partie VIP
                //console.log('VIP', manga_embed)
                //console.log(manga_embed, interaction.user.value)

            }
            else {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }
                interaction.user.minijeudeux = getRandomInt(102) // ressors 0 ou 1,... => 101     // partie non VIP
                //console.log(manga_embed)
                //console.log(manga_embed, interaction.user.value)
            }



            // a là, regarde si le membre fait partie des VIP

            const embed = new Discord.MessageEmbed()
                //met une couleur su la barre de l'embed a gauche
                .setColor("#e59313")
                // titre de l'embed
                .setTitle(bdd.manga[interaction.user.minijeudeux].nom) //importe le titre de bdd.json et a l'aide d'un nombre aléatoire il prend un des tableau en random
                .setDescription(bdd.manga[interaction.user.minijeudeux].description) //importe la description de bdd.json et a l'aide d'un nombre aléatoire il prend un des tableau en random
                .setImage(bdd.manga[interaction.user.minijeudeux].image) //importe l'image de bdd.json et a l'aide d'un nombre aléatoire il prend un des tableau en random
            interaction.reply({ content: "vous avez lancé(e) le jeu ", ephemeral: true, embeds: [embed], components: [row] });
        }
    }
};

module.exports.minijeu2souspartief = function (interaction) {
    if (interaction.isButton()) {
        if (interaction.customId === "boutonshonenfac") {
            if (bdd.manga[interaction.user.minijeudeux].genre === "shonen") {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix manga")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "gagné: <@" + interaction.user + "> c'etait bien " + bdd.manga[interaction.user.minijeudeux].genre, ephemeral: true, components: [row] });
            }
            else {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix manga")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "perdu: <@" + interaction.user + "> ce n'etait pas shonen mais " + bdd.manga[interaction.user.minijeudeux].genre, ephemeral: true, components: [row] });
                interaction.user.send("Ptdr t tro nul");
            }
        }
        if (interaction.customId === "boutonshojofac") {
            if (bdd.manga[interaction.user.minijeudeux].genre === "shojo") {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix manga")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "gagné: <@" + interaction.user + "> c'etait bien " + bdd.manga[interaction.user.minijeudeux].genre, ephemeral: true, components: [row] });
            }
            else {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix manga")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "perdu: <@" + interaction.user + "> ce n'etait pas shojo mais " + bdd.manga[interaction.user.minijeudeux].genre, ephemeral: true, components: [row] });
                interaction.user.send("Ptdr t tro nul");
            }
        }

        if (interaction.customId === "boutonseinenfac") {
            if (bdd.manga[interaction.user.minijeudeux].genre === "seinen") {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix manga")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "gagné: <@" + interaction.user + "> c'etait bien " + bdd.manga[interaction.user.minijeudeux].genre, ephemeral: true, components: [row] });
            }
            else {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix manga")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "perdu: <@" + interaction.user + "> ce n'etait pas seinen mais " + bdd.manga[interaction.user.minijeudeux].genre, ephemeral: true, components: [row] });
                interaction.user.send("Ptdr t tro nul");
            }
        }
    }
};