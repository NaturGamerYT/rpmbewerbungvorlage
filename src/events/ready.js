const { Events } = require('discord.js');
const mongoose = require('mongoose');
const mongoURL = process.env.mongoURL;

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		await mongoose.connect(mongoURL || '');

		if (mongoose.connect) {
			console.log('Es wurde eine Verbindung mit MongoDB hergestellt!');
		} else {
			console.log('Es konnte keine Verbindung mit MongoDB hergestellt werden...');
		};

	},
};

