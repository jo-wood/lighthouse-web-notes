

var newList = require("./addToList"),
    list = newList.list,
    sortData = require("./sortData"),
    sorted = sortData.sorted;

    
function runUpdate(item){
  return newList.addItem(item);
}

runUpdate('l');
runUpdate('b');
runUpdate('z');
runUpdate('e');
runUpdate('a');


console.log(sorted(list));
