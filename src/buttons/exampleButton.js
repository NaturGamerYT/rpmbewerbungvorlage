const { EmbedBuilder } = require('discord.js');

module.exports = {
    customId: 'exampleButton',
    async execute(interaction) {

        await interaction.reply({ content: 'Erfolg', ephemeral: true });

    },
};