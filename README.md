# simple-ffmpeg-encoder
To test this:
- Make sure you have installed [Node.js](https://nodejs.org/en/download/)
- Make sure you have FFMPEG installed (and know the path)
- Edit index.js at line 5, fill in the absolute path to your FFMPEG binary
- Run: ffmpeg -i test.avi -f decklink -list_devices 1 dummy
- Use the output name and replace DeckLink Mini Monitor with your capture card, then run: ffmpeg -i test.avi -f decklink -list_formats 1 'DeckLink Mini Monitor'
- Edit ffmpeg-command and change your card in the beginning to get the right settings
- Start with node index.js