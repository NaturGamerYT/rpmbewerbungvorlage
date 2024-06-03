const fs = require('fs');
const { Events } = require('discord.js');

module.exports = (client) => {
    client.handleModals = async (modalFiles, path) => {
        for (const file of modalFiles) {
            const modal = require(`../modals/${file}`);
            client.on(Events.InteractionCreate, async (interaction) => {
                if (!interaction.isModalSubmit()) return;
                if (interaction.customId === modal.customId) {
                    try {
                        await modal.execute(interaction, client);
                    } catch (error) {
                        console.error(error);
                        await interaction.reply({
                            content: 'There was an error while executing this modal action!',
                            ephemeral: true
                        });
                    }
                }
            });
        }
    };
};