# simple-FFmpeg-encoder

### Records video through BlackMagic Decklink devices using FFmpeg, serving fragments with Video.JS & HLS.js
This project uses your capture card to record video onto disk, acting as a MP4 recorder and also serving a live preview to your web browser with the output so you can preview the recording including audio from whatever machine in the same network. It's tested on Windows but should work on Unix if you compile FFmpeg with Decklink support. The [Zeranoe FFmpeg builds](http://ffmpeg.zeranoe.com/builds/) for Windows support DeckLink. 

To test this:
- Make sure you have installed [Node.js](https://nodejs.org/en/download/)
- Navigate your commandline to the root of the project and do "npm install"
- Make sure you have FFmpeg installed (and know the path)
- Edit index.js at line 5, fill in the absolute path to your FFmpeg binary
- Run: FFmpeg -i test.avi -f decklink -list_devices 1 dummy
- Use the output name and replace DeckLink Mini Monitor with your capture card, then run: FFmpeg -i test.avi -f decklink -list_formats 1 'DeckLink Mini Monitor'
- Edit FFmpeg-command and change your card in the beginning to get the right settings
- Start with node index.js