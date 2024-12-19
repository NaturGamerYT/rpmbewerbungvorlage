module.exports = {
    customId: 'exampleDropdown',
    async execute(interaction, client) {
        await interaction.reply({
            content: 'Option aus Dropdown ausgewählt!',
            ephemeral: true
        });
    },
};
