const fs = require('fs');
const { Events } = require('discord.js');

let bannedUsers = {};
try {
    const data = fs.readFileSync('./BannedUsers.json');
    bannedUsers = JSON.parse(data);
} catch (error) {
    bannedUsers = {};
}

let bannedGuilds = {};
try {
    const data = fs.readFileSync('./BannedGuilds.json');
    bannedGuilds = JSON.parse(data);
} catch (error) {
    bannedGuilds = {};
}

module.exports = (client) => {
    client.handleDropdowns = async (dropdownFiles, path) => {
        for (const file of dropdownFiles) {
            const dropdown = require(`../dropdowns/${file}`);
            client.on(Events.InteractionCreate, async (interaction) => {
                // if (!interaction.isStringSelectMenu() || !interaction.isUserSelectMenu() || !interaction.isChannelSelectMenu() || !interaction.isRoleSelectMenu()) return;

                if (interaction.isStringSelectMenu()) {
                    if (interaction.customId === dropdown.customId) {
                        try {
                            await dropdown.execute(interaction, client);
                        } catch (error) {
                            console.error(error);
                            await interaction.reply({
                                content: 'There was an error while executing this dropdown action!',
                                ephemeral: true
                            });
                        };
                    };
                } else if (interaction.isUserSelectMenu()) {
                    if (interaction.customId === dropdown.customId) {
                        try {
                            await dropdown.execute(interaction, client);
                        } catch (error) {
                            console.error(error);
                            await interaction.reply({
                                content: 'There was an error while executing this dropdown action!',
                                ephemeral: true
                            });
                        };
                    };
                } else if (interaction.isChannelSelectMenu()) {
                    if (interaction.customId === dropdown.customId) {
                        try {
                            await dropdown.execute(interaction, client);
                        } catch (error) {
                            console.error(error);
                            await interaction.reply({
                                content: 'There was an error while executing this dropdown action!',
                                ephemeral: true
                            });
                        };
                    };
                } else if (interaction.isRoleSelectMenu()) {
                    if (interaction.customId === dropdown.customId) {
                        try {
                            await dropdown.execute(interaction, client);
                        } catch (error) {
                            console.error(error);
                            await interaction.reply({
                                content: 'There was an error while executing this dropdown action!',
                                ephemeral: true
                            });
                        };
                    };
                } else return;
            });
        }
    };
};