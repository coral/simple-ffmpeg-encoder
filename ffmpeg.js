var exec = require('child_process').exec;
var fs = require('fs');

exports.start = function (path_to_ffmpeg)
{
	var command = path_to_ffmpeg + " " + fs.readFileSync('ffmpeg-command', 'utf8');
	var child =  exec(command,
		function (error, stdout, stderr) {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (error !== null) {
				console.log('exec error: ' + error);
			}
		}
	);
}