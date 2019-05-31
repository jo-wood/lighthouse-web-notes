

var newList = require("./addToList");

var updateList = {
  list: function(newItem){
    return newList.addItem(newItem);
  }  
}

var runUpdate = function(item){
  return updateList.list(item)
}

console.log(runUpdate('l'));
console.log(runUpdate('b'));
console.log(runUpdate('z'));
console.log(runUpdate('e'));
console.log(runUpdate('a'));
