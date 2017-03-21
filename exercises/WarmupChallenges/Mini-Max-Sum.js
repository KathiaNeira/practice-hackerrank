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
  var a_temp = readLine().split(' ');
  var a = parseInt(a_temp[0]);
  var b = parseInt(a_temp[1]);
  var c = parseInt(a_temp[2]);
  var d = parseInt(a_temp[3]);
  var e = parseInt(a_temp[4]);

  var numbers = [a, b, c, d, e];
  var sum = 0;
  var count = 1;
  var arrayResult = [];

  function calculeSum() {
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    return sum
  } 

  var result = calculeSum();

  for (var y = 0; y < numbers.length; y++) {
    var Subtract = result - numbers[y];
    arrayResult.push(Subtract);
  };

  var sortArray = arrayResult.sort();
  console.log(sortArray[0], sortArray[sortArray.length - 1]);
}
