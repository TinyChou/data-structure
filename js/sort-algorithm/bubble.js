/*
  bubble sort for a simple array
  [ 2, 5, 1, 6, 9, -1, -20 ] => [ -20, -1, 1, 2, 5, 6, 9 ]
*/


function bubbleSort(arr, cap) {
  var i, j;
  var swapped = false;
  
  for (j = 0; j < cap - 1; j++) {
    swapped = false;
    
    for (i = cap - 1; i > j; i--) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i, i - 1);
        swapped = true;
      }
    }
    
    if (!swapped) break; // no element should be bubbled now!
  }
  
  return arr;
}

function swap(arr, left, right) {
  var tmp = arr[left];
  arr[left] = arr[right];
  arr[right] = tmp;
}

var arr = [ 2, 5, 1, 6, 9, -1, -20 ];
var hopeResult = [ -20, -1, 1, 2, 5, 6, 9 ];
var result = bubbleSort(arr, arr.length);

console.log(hopeResult, result, hopeResult[3] === result[3]);

module.exports = bubbleSort;