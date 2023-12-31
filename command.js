import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTE5MDk3NTcxODEyMTgwMzc5Ng.G08Qgm.YSIzEhu3RslKC_eOfPXcSTLuptfQU-xXxhuLIs');

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1190975718121803796"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}