

var runSort = function(arr){

  if (typeof arr[0] === 'string') {
    return arr.sort();
  }

}

module.exports = {

  sorted: function(list){
    runSort(list);
  return list;
  }
} // end exports