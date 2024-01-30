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
const minijeu1 = require("./sous-partie commande exterieur/minijeu1");
const minijeu2 = require("./sous-partie commande exterieur/minijeu2");
const minijeu3 = require("./sous-partie commande exterieur/minijeu3");
const ban = require("./ban/ban");
const prefix = "U!";

/*gère le bot a la base avec son activité*/
client.login("OTcxNDI5NjcwNDQ2ODI1NDgy.GoM3XF.B5McUPUh__g5KKt4P1bEOcCXUkhTm0zBhZ2vm0");
client.on("ready", tokenetpresence.activité);

client.on('shardError', error => {
  console.error('ya une erreur :o ', error);
});

/*les messages activable par les gens*/
client.on("messageCreate", handle.msgf);
//complément de l'onglet crée + partie minijeu
client.on("interactionCreate", minijeubase.minijeubasef);

client.on("interactionCreate", minijeu1.minijeu1f);
client.on("interactionCreate", minijeu1.minijeu1souspartief);

client.on("interactionCreate", minijeu2.minijeu2f);// complement du deuxieme minijeu, il gere les boutons avec les id custom et s'occupe aussi du choix de categorie choisi par l'utilisateur il renverra un manga/anime random avec le questionnaire
client.on("interactionCreate", minijeu2.minijeu2souspartief); /*va test pour chaque difficuter chaque bouton et si le selectionnez est bien le bon*/
// complement du troisieme minijeu, il gere les boutons avec les id custom
client.on("interactionCreate", minijeu3.minijeu3f);


/*
client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (message.member.permissions.has("ADMINISTRATOR")) {
    if (message.content.startsWith(prefix + "paperasse")) {
      let mention = message.mentions.members.first();

      if (mention == undefined) {
        message.reply("Membre non ou mal mentionné, re test frero")
      }
      else {
        if (mention.kick) {
          mention.kick();
          message.channel.send(mention.displayName + "ce membre na pas ses papiers");

        }
        else {
          message.reply("il à ses papiers")
        }
      }
    }
  }
})*/