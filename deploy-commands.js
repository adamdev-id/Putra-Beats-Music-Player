const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const config = require('./config.json');

const commands = [
  new SlashCommandBuilder()
  .setName('help')
  .setDescription('Open Putra Beats Command Center'),

  new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play a song, playlist, or exact query')
    .addStringOption(option =>
      option
        .setName('query')
        .setDescription('YouTube URL, playlist URL, or exact search term')
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName('playsearch')
    .setDescription('Search YouTube results, then choose one from a dropdown')
    .addStringOption(option =>
      option
        .setName('query')
        .setDescription('Search term')
        .setRequired(true)
        .setAutocomplete(true)
    ),

  new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skip the current song'),

  new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stop playback and clear queue'),

  new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Show current queue'),

  new SlashCommandBuilder()
    .setName('pause')
    .setDescription('Pause the current song'),

  new SlashCommandBuilder()
    .setName('resume')
    .setDescription('Resume the current song'),

  new SlashCommandBuilder()
    .setName('filter')
    .setDescription('Apply audio filter')
    .addStringOption(option =>
      option
        .setName('type')
        .setDescription('Audio filter type')
        .setRequired(true)
        .addChoices(
          { name: 'None', value: 'none' },
          { name: 'Bass Boost', value: 'bass' },
          { name: 'Nightcore', value: 'nightcore' },
          { name: 'Slow + Reverb', value: 'reverb' },
          { name: 'Slow', value: 'slow' }
        )
    )
    .addStringOption(option =>
      option
        .setName('restart_song')
        .setDescription('Restart song from beginning or continue near current timestamp')
        .setRequired(true)
        .addChoices(
          { name: 'Yes', value: 'yes' },
          { name: 'No', value: 'no' }
        )
    )
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
  try {
    console.log('🚀 Deploying slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId),
      { body: commands }
    );

    console.log('✅ All slash commands deployed successfully!');
  } catch (error) {
    console.error('❌ Error deploying commands:', error);
  }
})();