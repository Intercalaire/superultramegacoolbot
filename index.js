const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
  ]
});
const tokenetpresence = require("./initialisation/token et presence");
const handle = require("./sous-partie commande exterieur/cmdmessage"); // fichier message
/* fichier minijeu*/
const minijeubase = require("./sous-partie commande exterieur/interractionjeubase");
const minijeu2 = require("./sous-partie commande exterieur/minijeu2");
const minijeu3 = require("./sous-partie commande exterieur/minijeu3");

/*gère le bot a la base avec son activité*/
client.login("token ici");
client.on("ready", tokenetpresence.activité);

client.on('shardError', error => {
  console.error('ya une erreur :o ', error);
});

/*les messages activable par les gens*/
client.on("messageCreate", handle.msgf);
//complément de l'onglet crée + partie minijeu
client.on("interactionCreate", minijeubase.minijeubasef);
client.on("interactionCreate", minijeu2.minijeu2f);// complement du deuxieme minijeu, il gere les boutons avec les id custom et s'occupe aussi du choix de categorie choisi par l'utilisateur il renverra un manga/anime random avec le questionnaire
client.on("interactionCreate", minijeu2.minijeu2souspartief); /*va test pour chaque difficuter chaque bouton et si le selectionnez est bien le bon*/
// complement du troisieme minijeu, il gere les boutons avec les id custom
client.on("interactionCreate", minijeu3.minijeu3f);
