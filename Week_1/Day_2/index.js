/*jshint esversion:6*/

var fs = require('fs'),
    input = fs.readFileSync('./input.txt').toString(),
    numbersStrings = input.split('\n'),
    total = 0;

for (var numStr of numbersStrings){
  var number = parseInt(numStr, 10);

  if(!isNaN(number)){
      total += number;
  }
}

console.log(total);
