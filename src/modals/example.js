const { EmbedBuilder } = require('discord.js');

module.exports = {
    customId: 'test',
    async execute(interaction) {

        try {

            const input = await interaction.fields.getTextInputValue('input');

            // BEISPIEL
            
        } catch (error) {
            console.log(error);
        };

    },
};
