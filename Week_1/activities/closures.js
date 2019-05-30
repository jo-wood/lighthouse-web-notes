
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5], 
      index = 0;

  let roll = function () {
       let result = list[index];
       index++;
      return result;
  }
  return roll;
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6




//********** From the reading on closures:


// function makeIdGenerator() {
//   var id = 0;

//   // The following is the closure function
//   return function () {
//     // This inner function accesses and assigns the value of
//     // the variable id, which was defined in the parent function
//     id += 1;
//     return id;
//   }
// }

// // makeIdGenerator returns a function which is assigned to
// // the variable nextId
// var nextId = makeIdGenerator();

// console.log(nextId()); // Logs: 1
// console.log(nextId()); // Logs: 2






// var outer = function (y) {
//   var inner = function (x) {
//     var z = x + y;
//     return z;
//     }
//   return inner;
// };

// var foo = outer(10);

// console.log((foo)(5));


// var foo = (function () {
//   var x = 10;

//   var inner = function () {
//     console.log("Value of x is: " + x);
//   }
//   return inner;
// })();
// foo();


// var outer = function () {
//   var x = 10;

//   var inner = function () {
//     console.log("The value of x is: " + x);
//   }
//   return inner;
// };

// var foo = outer();
// //!this is new here, usually thus far we would just call foo in order to get the result
// foo();