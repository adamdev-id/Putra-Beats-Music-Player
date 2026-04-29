# Putra Beats

<p align="center">
  <img src="https://adamputra-bucket-demo.s3.ap-southeast-1.amazonaws.com/putrabeats.png" alt="Putra Beats Logo" />
</p>

<p align="center">
  <b>Premium Music for Discord</b><br/>
  Smooth playback, smart search, rich controls, filters, and a clean interactive player.
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white">
  <img alt="discord.js" src="https://img.shields.io/badge/discord.js-v14-5865F2?logo=discord&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-blue.svg">
  <img alt="Status" src="https://img.shields.io/badge/status-active-success">
</p>

---

## Overview

**Putra Beats** is a premium Discord music bot built for modern server playback.

It combines:
- fast music playback
- interactive player controls
- `/playsearch` with dropdown selection
- audio filters
- queue persistence
- polished embeds and branding

The goal is simple: make a music bot that feels smooth, premium, and enjoyable to use.

---

## Features

### Core playback
- Play songs from YouTube URLs
- Play playlists
- Play direct search queries
- Queue support
- Skip, pause, resume, and stop

### Smart search flow
- `/playsearch` slash command
- autocomplete while typing
- dropdown selection menu for search results
- cleaner experience than guessing the first result

### Rich player UI
- premium embedded “Now Playing” card
- song thumbnail
- duration display
- selected audio format display
- requester display
- queue preview

### Interactive controls
- Pause / Resume
- Back 10 seconds
- Skip 10 seconds
- Next track
- Stop playback
- Queue button
- DM current song title

### Audio filters
- None
- Bass Boost
- Nightcore
- Slow + Reverb
- Slow

### Stability improvements
- queue persistence via `queue.json`
- alternative song fallback when a source becomes unavailable
- interaction error handling
- voice reconnect behavior

---

## Commands

### Music
- `/play <query>` — Play a song, playlist, or exact query
- `/playsearch <query>` — Search results and choose one from a dropdown
- `/queue` — Show the current queue

### Playback
- `/pause` — Pause the current song
- `/resume` — Resume playback
- `/skip` — Skip the current song
- `/stop` — Stop playback and clear the queue

### Audio
- `/filter <type> <restart_song>` — Apply an audio filter
- `/help` — Open the Putra Beats command center

---

## Player Buttons

The embedded player includes interactive controls:

- **Pause / Resume** — Toggle playback
- **Back 10s** — Rewind 10 seconds
- **Skip 10s** — Jump forward 10 seconds
- **Next** — Skip to the next track
- **Stop** — Stop playback
- **Queue** — Show current queue
- **DM Song** — Send the current song title to your DM

---

## Tech Stack

- [Node.js](https://nodejs.org/)
- [discord.js v14](https://discord.js.org/)
- [@discordjs/voice](https://www.npmjs.com/package/@discordjs/voice)
- [yt-dlp-exec](https://www.npmjs.com/package/yt-dlp-exec)
- [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)

---

## Installation

### 1. Clone the project

```bash
git clone YOUR_REPOSITORY_URL
cd ytdlp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `config.json`

Create a `config.json` file in the project root:

```json
{
  "token": "YOUR_BOT_TOKEN",
  "clientId": "YOUR_APPLICATION_CLIENT_ID",
  "guildId": "YOUR_TEST_GUILD_ID"
}
```

### 4. Deploy slash commands

```bash
node deploy-commands.js
```

### 5. Start the bot

```bash
node index.js
```

---

## Windows Test Setup

If you are testing locally on Windows:

1. Install Node.js 18+
2. Run `npm install`
3. Deploy commands with `node deploy-commands.js`
4. Start the bot with `node index.js`

If you are using a nightly `yt-dlp` workflow during testing, make sure your installed package and runtime environment are consistent before comparing terminal behavior to bot behavior.

---

## Server Deployment Notes

For a private VPS or Linux server:

- install Node.js 18+
- install dependencies with `npm install`
- keep the project running with **pm2**, **systemd**, or Docker
- redeploy commands after changing slash command definitions
- make sure outbound network access is allowed for Discord and YouTube-related requests

Example using PM2:

```bash
npm install -g pm2
pm2 start index.js --name putra-beats
pm2 save
pm2 startup
```

---

## `/playsearch` Flow

`/playsearch` gives Putra Beats a more premium music selection flow:

1. User types `/playsearch`
2. Discord autocomplete suggests search text matches while typing
3. Bot returns a dropdown menu with top results
4. User selects the desired song
5. Bot queues or plays the chosen track

This is the closest Discord-native experience to a search combobox.

---

## Configuration Notes

### `config.json`

| Key | Description |
|---|---|
| `token` | Discord bot token |
| `clientId` | Discord application client ID |
| `guildId` | Test server ID for guild command deployment |

### Queue persistence

The bot stores queue state in:

```txt
queue.json
```

This allows the bot to restore queued songs after a restart in supported scenarios.

---

## Troubleshooting

### Commands do not appear
Re-run:

```bash
node deploy-commands.js
```

Then restart the bot.

### Bot joins but no music plays
Check:
- bot has permission to connect and speak
- FFmpeg is available through `ffmpeg-static`
- current source is playable

### `Unknown interaction`
This usually means the bot responded too late to a slash command, select menu, or button interaction. Use deferred replies or deferred updates for actions that take time.

### `Requested format is not available`
This can happen on certain YouTube videos depending on extraction path or available formats. The bot includes fallback logic and alternate-result handling, but some videos may still require different extractor behavior.

### Bot cannot DM the current song
The user may have DMs disabled for the server.

---

## Branding

### App description

**Putra Beats is a premium Discord music bot built for smooth playback, smart search, rich controls, audio filters, and a clean modern player experience.**

### Short description

**Premium Discord music bot with smart search, rich controls, filters, and a sleek interactive player.**

### Help title

**Putra Beats • Command Center**

---

## Project Structure

```txt
.
├── config.json
├── deploy-commands.js
├── index.js
├── package.json
├── queue.json
└── README.md
```

---

## Recommended Improvements

Ideas for future upgrades:

- loop song / loop queue
- shuffle queue
- lyrics command
- volume control
- remove selected track from queue
- queue pagination
- now playing progress bar
- Spotify / SoundCloud support
- multi-guild search cache cleanup improvements
- dashboard / web panel

---

## License
This project is licensed under the MIT License.

---

## Credits

Built with ❤️ by **Firdaus Adam Friska Putra**.
