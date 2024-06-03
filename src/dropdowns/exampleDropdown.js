module.exports = {
    customId: 'exampleDropdown',
    async execute(interaction, client) {
        // Hier kannst du deine Logik für die Dropdown-Interaktion implementieren
        await interaction.reply({
            content: 'Option aus Dropdown ausgewählt!',
            ephemeral: true
        });
    },
};