/*
  
  selection sort
  [ 2, 5, 1, 6, 9, -1, -20 ] => [ -20, -1, 1, 2, 5, 6, 9 ]
*/


function selectionSort(arr, cap) {
  var i, j;
  var min;
  
  for (j = 0; j < cap - 1; j++) {
    min = j;
    
    for (i = j + 1; i < cap; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    swap(arr, j, min);
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
var result = selectionSort(arr, arr.length);

console.log(hopeResult, result, hopeResult[3] === result[3]);