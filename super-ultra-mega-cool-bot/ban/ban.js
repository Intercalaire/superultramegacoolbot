const Discord = require("discord.js");
const { Permissions } = require('discord.js');
const bddfilm = require("../bdd/bdd film.json");
const { Client, GatewayIntentBits } = require("discord.js");
const { truncate } = require("fs");
const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const VIP = [546679603255705601, 431039987337920513, 971429670446825482, 677970434918055936, 843824285867966485, 439140770499526657]

const prefix = "U!";

module.exports.ban = {
    name: "paperasse",
    category: "moderation",
    Permissions: ['KICK_MEMBERS'],
    ownerOnly: false,
    usage: 'paperasse [@member] [reason]',
    examples: ['paperasse @acnkcnsq trouducu'],
    description: "fais de la parerasse",
    async runInter(client, message, arg) {
        if (!args[0]) return message.reply('Spécifier un membre pour voir ses papiers');
        if (!args[1]) return message.reply('Spécifier une raison pour la perte de ses papiers');

        const target = message.mention.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        if (!target.kickable) return message.reply('ce membre a bien ses papiers');

        target.kick(reason);
        message.channel.send('Le membre ${target} a pas ses papiers');
    },
    options: [
        {
            name: "target",
            description: "L'utilisateur a perdu ses papiers, dommage",
            type: "NUMBER",
            required: true
        },
        {
            name: "reason",
            description: "la raison de la perte de ses papiers",
            type: "USER",
            required: false
        }
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');

        if (!target.kickable) return interaction.reply('ce membre a bien ses papiers');

        target.kick(reason);
        interaction.reply('Le membre ${target} a pas ses papiers');
    }
};
