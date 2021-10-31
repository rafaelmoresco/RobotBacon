Simple Discord bot with role removal role created for 2021 NNN

Dependencies:

1 - Node.js 
    https://nodejs.org/en/download/
2 - Discord.js
    npm install discord.js
3 - Eslint
    npm install eslint
4 - discordjs/builders and discordjs/rest
    npm install @discordjs/builders @discordjs/rest discord-api-types

Instructions:

1 - Add a file called config.json to the project folder. on this file add the following:
{
	"clientId": "botclientID",
	"guildId": "540006977938653214",
	"token": "botToken"
}
2 - Run "node deploy-commands.js". If it worked, the program will return "Successfully registered application commands."
3 - Run "node index.js". If it worked, the program will return "Ready!" and the bot should be properly working