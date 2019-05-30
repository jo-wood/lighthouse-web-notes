// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach((name) => {
    if(name === "Waldo"){
      found(arr.indexOf(name));
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at index: ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



  //refactor with forEach
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i); // execute callback
  //   }
  // }