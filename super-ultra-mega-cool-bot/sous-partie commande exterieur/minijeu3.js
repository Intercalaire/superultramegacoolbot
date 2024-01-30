const Discord = require("discord.js");
const { Permissions } = require('discord.js');
const bdd = require("../bdd/bdd.json");
const bddfilm = require("../bdd/bdd film.json");
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});
const VIP = [546679603255705601, 431039987337920513, 971429670446825482, 677970434918055936, 843824285867966485, 439140770499526657]



module.exports.minijeu3f = function (interaction) {
    if (interaction.isButton()) {
        if (interaction.customId === "bouton choix minijeu3") {
            interaction.reply({ content: "yep" });
        }
    }


};