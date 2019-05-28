/*jshint esversion:6*/

var fs = require('fs');
var input = fs.readFileSync('./input.txt').toString();

var numbersStrings = input.split('\n');

var numberArray = [];

for (var numStr of numbersStrings){
  numberArray.push(parseInt(numStr, 10));
}

//check if type is correct
console.log(typeof numberArray[8]);
