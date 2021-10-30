const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('You are a loser'),
	async execute(interaction) {
		interaction.member.roles.remove('904007020980613172');
		return interaction.reply('Fucking loser lol');
	},
};