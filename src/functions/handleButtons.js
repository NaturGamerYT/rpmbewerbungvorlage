const fs = require('fs');
const { Events } = require('discord.js');

module.exports = (client) => {
    client.handleButtons = async (buttonFiles, path) => {
        for (const file of buttonFiles) {
            const button = require(`../buttons/${file}`);
            client.on(Events.InteractionCreate, async (interaction) => {
                if (interaction.isButton()) {
                    if (interaction.customId === button.customId) {
                        try {
                            await button.execute(interaction, client);
                        } catch (error) {
                            console.error(error);
                            await interaction.reply({
                                content: 'There was an error while executing this button action!',
                                ephemeral: true
                            });
                        };
                    };
                };
            });
        };
    };
};