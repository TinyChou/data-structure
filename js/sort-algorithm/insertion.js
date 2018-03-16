/*

  insertion sort
  [ 2, 5, 1, 6, 9, -1, -20 ] => [ -20, -1, 1, 2, 5, 6, 9 ]
*/


function insertionSort(arr, cap) {
  var i, j;
  
  for (j = 1; j < cap; j++) {
    i = j - 1;
    
    while(i >= 0 && arr[i + 1] < arr[i]) {
      swap(arr, i + 1, i);
      i--;
    }
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
var result = insertionSort(arr, arr.length);

console.log(hopeResult, result, hopeResult[3] === result[3]);