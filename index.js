import { Client, GatewayIntentBits, Message } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    message.reply("Hye Darling...👋");
});

client.on('interactionCreate', (interacrtion) => {
    console.log(interacrtion)
    interacrtion.reply('radhe')
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('create')) {
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating short with ID for " + url,
        })
    }
    message.reply({
        content: "Hello world",
    })
})

client.login('MTE5MDk3NTcxODEyMTgwMzc5Ng.G08Qgm.YSIzEhu3RslKC_eOfPXcSTLuptfQU-xXxhuLIs');