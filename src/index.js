const startTime = process.hrtime();

const { Client, GatewayIntentBits, Collection, Partials, Events, DataResolver, Routes, ActivityType, EmbedBuilder } = require(`discord.js`);
const fs = require('fs');
const os = require('os');
const axios = require('axios');

require("dotenv").config({ path: '../.env' });

const client = new Client({
intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
],
partials: [
    Partials.Channel,
    Partials.Message,
    Partials.Reaction,
    Partials.ThreadMember,
    Partials.GuildMember,
],
// presence: {
//     activities: [{
//         name: 'Roleplay',
//         type: ActivityType.Playing,
//     }],
//     status: 'online',
// },
});

client.commands = new Collection();
client.buttons = new Collection();
client.dropdowns = new Collection();
client.buttons = new Collection();

const functions = fs.readdirSync("../src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("../src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("../src/commands");
const buttonFiles = fs.readdirSync("../src/buttons").filter(file => file.endsWith(".js"));
const dropdownFiles = fs.readdirSync("../src/dropdowns").filter(file => file.endsWith(".js"));
const modalFiles = fs.readdirSync("../src/modals").filter(file => file.endsWith(".js"));

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    };

    client.handleEvents(eventFiles, "../src/events");
    client.handleCommands(commandFolders, "../src/commands");
    client.handleButtons(buttonFiles, "../src/buttons");
    client.handleDropdowns(dropdownFiles, "../src/dropdowns");
    client.handleModals(modalFiles, "../src/modals");
    client.login(process.env.TOKEN)
})();