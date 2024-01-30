const Discord = require("discord.js");
const { Permissions } = require('discord.js');
const bddfilm = require("../bdd/bdd film.json");
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const VIP = [546679603255705601, 431039987337920513, 971429670446825482, 677970434918055936, 843824285867966485, 439140770499526657, 384334998544711692]


module.exports.minijeu1f = function (interaction) {
    if (interaction.isButton()) {
        if (interaction.customId === "bouton choix film") {
            var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId('boutonfilmchoix1')
                    .setLabel('Titre')
                    .setStyle("PRIMARY")
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId('boutonfilmchoix2')
                    .setLabel('Description')
                    .setStyle("PRIMARY")
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId('boutonfilmchoix3')
                    .setLabel('Genre')
                    .setStyle("PRIMARY")
                )
                .addComponents(new Discord.MessageButton()
                    .setCustomId('boutonfilmchoix4')
                    .setLabel('Image')
                    .setStyle("PRIMARY")
                )
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            interaction.user.mini_jeu_un_oeuvre = getRandomInt(13) // ressors 0 ou 1,... => 4     // d'ou provients les elements vrai 
            interaction.user.mini_jeu_un_faux = getRandomInt(13) // ressors 0 ou 1,... => 4     // d'ou provient l'element faux
            interaction.user.mini_jeu_un_quoi = getRandomInt(4) // ressors 0 ou 1,... => 3     // quelle elements va etre faux tjrs mettre 4

            if (interaction.user.mini_jeu_un_faux === interaction.user.mini_jeu_un_oeuvre) {
                while (interaction.user.mini_jeu_un_faux == interaction.user.mini_jeu_un_oeuvre) {
                    interaction.user.mini_jeu_un_faux = getRandomInt(5);
                }
            }

            if (interaction.user.mini_jeu_un_quoi === 0) {
                //ici le titre est faux
                const embed = new Discord.MessageEmbed()
                    .setColor("#e59313")
                    .setTitle(bddfilm.film[interaction.user.mini_jeu_un_quoi].nom)
                    .setDescription(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].description)
                    .setImage(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].image)
                    .addFields({ name: 'genre(s)', value: bddfilm.film[interaction.user.mini_jeu_un_oeuvre].genre, inline: true })
                interaction.reply({ content: "vous avez lancé(e) le jeu ", ephemeral: true, embeds: [embed], components: [row] });
            }

            if (interaction.user.mini_jeu_un_quoi === 1) {
                //ici la description est fausse
                const embed = new Discord.MessageEmbed()
                    .setColor("#e59313")
                    .setTitle(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].nom)
                    .setDescription(bddfilm.film[interaction.user.mini_jeu_un_quoi].description)
                    .setImage(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].image)
                    .addFields({ name: 'genre(s)', value: bddfilm.film[interaction.user.mini_jeu_un_oeuvre].genre, inline: true })
                interaction.reply({ content: "vous avez lancé(e) le jeu ", ephemeral: true, embeds: [embed], components: [row] });
            }
            if (interaction.user.mini_jeu_un_quoi === 2) {
                //ici le genre est fausse
                const embed = new Discord.MessageEmbed()
                    .setColor("#e59313")
                    .setTitle(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].nom)
                    .setDescription(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].description)
                    .setImage(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].image)
                    .addFields({ name: 'genre(s)', value: bddfilm.film[interaction.user.mini_jeu_un_quoi].genre, inline: true })
                interaction.reply({ content: "vous avez lancé(e) le jeu ", ephemeral: true, embeds: [embed], components: [row] });
            }
            if (interaction.user.mini_jeu_un_quoi === 3) {
                //ici l'image est fausse
                const embed = new Discord.MessageEmbed()
                    .setColor("#e59313")
                    .setTitle(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].nom)
                    .setDescription(bddfilm.film[interaction.user.mini_jeu_un_oeuvre].description)
                    .setImage(bddfilm.film[interaction.user.mini_jeu_un_quoi].image)
                    .addFields({ name: 'genre(s)', value: bddfilm.film[interaction.user.mini_jeu_un_oeuvre].genre, inline: true })
                interaction.reply({ content: "vous avez lancé(e) le jeu ", ephemeral: true, embeds: [embed], components: [row] });
            }
        }
    }
};


module.exports.minijeu1souspartief = function (interaction) {
    if (interaction.isButton()) {
        if (interaction.customId === "boutonfilmchoix1") {
            if (interaction.user.mini_jeu_un_quoi === 0) {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "gagné: <@" + interaction.user + "> c'etait bien le nom du film qui etait faux son vrai titre est: " + bddfilm.film[interaction.user.mini_jeu_un_oeuvre].nom, ephemeral: true, components: [row] });
            }
            else {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.delete()
                interaction.reply({ content: "perdu: <@" + interaction.user + ">", ephemeral: true, components: [row] });
                //interaction.user.send("Ptdr t tro nul"); // va dans les mp de l'utilisateur et l'insulte
            }
        }
        if (interaction.customId === "boutonfilmchoix2") {
            if (interaction.user.mini_jeu_un_quoi === 1) {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "gagné: <@" + interaction.user + "> c'etait bien la description du film qui etait fausse sa vrai description est: " + bddfilm.film[interaction.user.mini_jeu_un_oeuvre].description, ephemeral: true, components: [row] });
            }
            else {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "perdu: <@" + interaction.user + ">", ephemeral: true, components: [row] });
            }
        }

        if (interaction.customId === "boutonfilmchoix3") {
            if (interaction.user.mini_jeu_un_quoi === 2) {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "gagné: <@" + interaction.user + "> c'etait bien le genre qui etait faux, son vrai genre est: " + bddfilm.film[interaction.user.mini_jeu_un_oeuvre].genre, ephemeral: true, components: [row] });
            }
            else {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "perdu: <@" + interaction.user + ">", ephemeral: true, components: [row] });
            }
        }
        if (interaction.customId === "boutonfilmchoix4") {
            if (interaction.user.mini_jeu_un_quoi === 3) {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "gagné: <@" + interaction.user + "> c'etait bien l'image d'illustatrion du film qui etait fausse sa vrai illustatrion est: " + bddfilm.film[interaction.user.mini_jeu_un_oeuvre].image, ephemeral: true, components: [row] });
            }
            else {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('relancer le jeu')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "perdu: <@" + interaction.user + ">", ephemeral: true, components: [row] });
            }
        }
    }
};