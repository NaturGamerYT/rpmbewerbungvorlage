const { REST } = require("@discordjs/rest");
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const { SlashCommandBuilder, ContextMenuCommandBuilder } = require('discord.js')

module.exports = (client) => {
    client.handleCommands = async (commandFolders, path) => {
        client.commandArray = [];
        for (folder of commandFolders) {
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/${folder}/${file}`);
                client.commands.set(command.data.name, command);
                
                if (command.data instanceof SlashCommandBuilder) {
                    client.commandArray.push(command.data.toJSON());
                } else if (command.data instanceof ContextMenuCommandBuilder) {
                    client.commandArray.push(command.data.toJSON());
                } else {
                    client.commandArray.push(command.data);
                }

                // await client.commandArray.forEach(async value => {
                //     if (value.name === "myprofile") {
                //         console.log(JSON.stringify(value))
                //     }
                // })
            }
        }

        const rest = new REST({
            version: '9'
        }).setToken(process.env.TOKEN);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationCommands(process.env.clientID), {
                        body: client.commandArray
                    },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();
    };
};