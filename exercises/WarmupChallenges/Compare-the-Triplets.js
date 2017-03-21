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
	var a0_temp = readLine().split(' ');
	var a0 = parseInt(a0_temp[0]);
	var a1 = parseInt(a0_temp[1]);
	var a2 = parseInt(a0_temp[2]);
	var b0_temp = readLine().split(' ');
	var b0 = parseInt(b0_temp[0]);
	var b1 = parseInt(b0_temp[1]);
	var b2 = parseInt(b0_temp[2]);
	var Alice = [a0, a1, a2];
	var Bob = [b0, b1, b2];
	var countA = 1;
	var countB = 1;
	var i;
	for (i = 0; i < Alice.length; i++) {
		if (Alice[i] > Bob[i]) {
			countA++;
		} else if (Alice[i] < Bob[i]) {
			countB++;
		}

	}
	console.log(countA - 1, countB - 1)
}
