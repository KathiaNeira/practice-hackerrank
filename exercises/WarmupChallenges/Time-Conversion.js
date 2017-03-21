process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
	input_stdin += data;
});

process.stdin.on('end', function() {
	input_stdin_array = input_stdin.split("\n");
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
	var time = readLine();
	var hour = time.substring(0, 2);
	var minutes = time.substring(3, 5);
	var seconds = time.substring(6, 8);
	var timetable = time.substring(8, 11);
	if (timetable === "AM") {
		if (hour >= 12) {
			var format = "00";
			console.log(format + ":" + minutes + ":" + seconds);
		} else {
			console.log(hour + ":" + minutes + ":" + seconds);
		}
	} else {
		if (hour >= 12) {
			console.log(hour + ":" + minutes + ":" + seconds);
		} else {
			var format = parseInt(hour) + 12;
			console.log(format + ":" + minutes + ":" + seconds);
		}
	}
}
