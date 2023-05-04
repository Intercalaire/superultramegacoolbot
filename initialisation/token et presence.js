const Discord = require("discord.js");

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

module.exports.activité = function (client) {
    console.log("bot opérationnel");

    client.user.setActivity(`use U!help`, { type: "PLAYING" }); //PLAYING/WATCHING marche aussi a la place de WATCHING/PLAYING

    /*Client.user.setPresence({
      status: 'online', //met le bot en ligne (avec le contour en vert par exemple 'dns' met en rouge ( ne pas deranger))
      activities: [{
          name: "En train d'être coder",
          type: 'playing'
      }]
    });*/
};