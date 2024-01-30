const Discord = require("discord.js");
const bdd = require("../bdd/bdd.json");
const { Client } = require("discord.js");
const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});
const minijeu1 = require("./minijeu1");
const VIP = [546679603255705601, 431039987337920513, 971429670446825482, 677970434918055936, 843824285867966485, 439140770499526657, 384334998544711692]
const prefix = "U!";

module.exports.minijeubasef = function (interaction) {
    if (interaction.isSelectMenu()) {
        if (interaction.customId === "select") {
            console.log(interaction.values);

            if (interaction.values == "option1") {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix film")
                        .setLabel('lancer le jeu')
                        .setStyle("DANGER"),
                    )/*
                    .addComponents(new Discord.MessageButton() //crée un bouton aide qui na pas besoin d'id custom !!!
                        .setLabel('choix aide')
                        .setStyle("LINK")
                        .setURL("https://fr.wikipedia.org/wiki/Genre_cin%C3%A9matographique"),
                    );*/

                interaction.reply({ content: "Vous avez sélectionné le premier mini jeu " + ", celui-ci consiste à choisir entre 4 propositions le/les genres, le titre, l'illustration, la description. **l'un de ses choix sera faux et ne correspond pas au film**🐱‍💻", ephemeral: false, components: [row] });
            };


            //fais appel aux boutons ( reste du code un peu plus bas)
            if (interaction.values == "option2") {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix manga")
                        .setLabel('lancer le jeu')
                        .setStyle("DANGER"),
                    )

                    .addComponents(new Discord.MessageButton() //crée un bouton aide qui na pas besoin d'id custom !!!
                        .setLabel('choix aide')
                        .setStyle("LINK")
                        .setURL("https://www.fnac.com/Shojo-Shonen-Seinen-quels-sont-les-differents-types-de-manga/cp45821/w-4"),
                    );

                interaction.reply({ content: "Vous avez sélectionné le deuxième mini jeu " + ", celui-ci consiste à choisir entre 3 propositions (shonen, shojo ou seinen). Vous allez avoir le titre du manga avec une image d'illustration et son résumé (en provenance de nautiljon) à vous de deviner de quelle catégorie fait partie celui-ci. Vous avec une aide de définition si vous ne savez pas ce que veut dire 'shonen,shojo et seinen'🐱‍🐉", ephemeral: false, components: [row] });
            };
            if (interaction.values == "option3") {
                var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("bouton choix minijeu3")
                        .setLabel('test')
                        .setStyle("PRIMARY"),
                    )
                interaction.reply({ content: "Vous avez séléctionné l'option trois " + ", je cherche une idée pour un minijeu ( si tu en as une viens me la dire Intercalaire#0003)", ephemeral: true, components: [row] });
            }
        }
    }
};