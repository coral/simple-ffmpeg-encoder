var express = require('express');
var app = express();

var ffmpeg = require('./ffmpeg');
var path_to_ffmpeg = "C:/FFMPEG/bin/ffmpeg.exe"

/* START FFMPEG */
ffmpeg.start(path_to_ffmpeg);

/* SERVE FRAGMENTS AND UI */

app.use('/', express.static('public'));
app.use('/plugins', express.static('node_modules/'));
app.use('/hls', express.static('media/hls'));

var server = app.listen(3050, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Frontend is listening at http://%s:%s', host, port);
});