const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('You lost NNN'),
	async execute(interaction) {
		try {
			interaction.member.roles.remove('904007020980613172');
			return interaction.reply('This user lost NNN');
		} catch(err) {
			return interaction.reply('You already lost');
		}
	},
};