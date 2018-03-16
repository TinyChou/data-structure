/*
  shell sort 希尔排序
  bigest elements at the front of array --- turtle
  smallest elements at the end of array --- rabbit
  
  [ 2, 5, 1, 6, 9, -1, -20 ] => [ -20, -1, 1, 2, 5, 6, 9 ]
*/

var bubble = require('./bubble.js');

function shellSort(arr, cap) {
  var step = 1;
  var i, j;
  var tmpCap;
  var tmpArray = null;
  
  while(step < cap) { step = parseInt(3 * step + 1); }
  
  while(step > 1) {
    step = parseInt(step / 3 + 1);
    
    for (i = 0; i < step; i++) {
      tmpCap = parseInt((cap - i - 1) / step + 1); 
      tmpArray = new Array(tmpCap);
      
      for (j = 0; j < tmpCap; j++) {
        tmpArray[j] = arr[i + parseInt(j * step)];
      }
      
      bubble(tmpArray, tmpCap);
      
      for(j = 0; j < tmpCap; j++) {
        arr[i + parseInt(j * step)] = tmpArray[j];
      }
      
      tmpArray.length = 0;
      tmpCap = 0;
    }
    
  }
  
  return arr;
}

var arr = [ 2, 5, 1, 6, 9, -1, -20 ];
var hopeResult = [ -20, -1, 1, 2, 5, 6, 9 ];
var result = shellSort(arr, arr.length);

console.log(hopeResult, result, hopeResult[3] === result[3]);

