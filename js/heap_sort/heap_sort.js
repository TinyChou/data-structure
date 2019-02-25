function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

function max_heapify(arr, start, end) {
  // NOTE: root = i * 2, child left = i * 2 + 1, right child = i * 2 + 2

  // 父节点
  var dad = start;
  // 子节点
  var son = dad * 2 + 1;

  while (son <= end) {// 子节点在范围内才做比较

    // 子节点中选择最大的
    if (son + 1 <= end && arr[son] < arr[son + 1]) {
      son++;
    }

    if (arr[dad] > arr[son]) { // 如果父节点大于子节点，调整完毕
      return;
    } else { // 否则交换父子内容再继续子节点和孙子节点比较...
      swap(arr, dad, son);
      dad = son;
      son = dad * 2 + 1;
    }
  }
};

function heap_sort(arr) {
  var len = arr.length;
  var i;
  // 创建大顶堆
  for (i = Math.floor(len / 2 - 1); i >= 0; i--) {
    max_heapify(arr, i, len - 1);
  }

  // 先将第一个元素和已排好元素前一位做交换，再重新调整，直到排序完毕
  for (i = len - 1; i > 0; i--) {
    swap(arr, 0, i);
    max_heapify(arr, 0, i - 1);
  }
};

function min_heapify(arr, start, end) {
  var dad = start;
  var son = dad * 2 + 1;

  while (son <= end) {
    if (son + 1 <= end && arr[son] > arr[son + 1]) {
      son++;
    }

    if (arr[dad] < arr[son]) {
      return;
    } else {
      swap(arr, dad, son);
      dad = son;
      son = dad * 2 + 1;
    }
  }
};

function heap_sort_reverse(arr) {
  var len = arr.length;
  var i;

  for (i = Math.floor(len / 2 - 1); i >= 0; i--) {
    min_heapify(arr, i, len - 1);
  }

  for (i = len - 1; i > 0; i--) {
    swap(arr, 0, i);
    min_heapify(arr, 0, i - 1);
  }
};

var arr = [ 3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7, 4, 0, 2, 6 ];
console.log('原数组: ', arr);
heap_sort(arr);
console.log('大顶堆: ', arr);
heap_sort_reverse(arr);
console.log('小顶堆: ', arr);

// 扩展1: 一堆数(N)中最小的几个(M)?
// 扩展2: 一堆数(N)中最大的几个(M)?
function Heap(size) {
  this.size = size;
  this.arr = new Array(size);

  if (this.isMax) {
    this.arr.fill(-1);
  } else {
    this.arr.fill(Math.pow(2, 31) - 1); // MAX_VALUE 32bit
  }
}

Heap.prototype.size = 0;
Heap.prototype.arr = [];
Heap.prototype.isMax = true; // false -最小几个, true -最大几个

Heap.prototype.peek = function () {
  return this.arr[0];
};

Heap.prototype.replace = function (val) {
  this.arr[0] = val;
  if (!this.isMax) this.moveBigger2Top();
  else this.moveSmaller2Top();
};

Heap.prototype.getVals = function () {
  return this.arr;
};

Heap.prototype.moveSmaller2Top = function () {
  var maxIdx = this.size - 1;
  var lastNonLeafIdx = Math.floor((maxIdx - 1) / 2);
  var arr = this.arr;

  var currNodeIdx = 0;
  while (currNodeIdx <= lastNonLeafIdx) {
    var leftChildIdx = currNodeIdx * 2 + 1;
    var rightChildIdx = leftChildIdx + 1;

    var targetNodeIdx = leftChildIdx;
    if (rightChildIdx <= maxIdx && arr[rightChildIdx] < arr[leftChildIdx]) {
      targetNodeIdx = rightChildIdx;
    }

    if (arr[targetNodeIdx] < arr[currNodeIdx]) {
      var tmp = arr[targetNodeIdx];
      arr[targetNodeIdx] = arr[currNodeIdx];
      arr[currNodeIdx] = tmp;
    }

    currNodeIdx = targetNodeIdx;
  }
};

Heap.prototype.moveBigger2Top = function () {
  var maxIdx = this.size - 1; // heap总大小
  var lastNonLeafIdx = Math.floor((maxIdx - 1) / 2); // 上一次父子节点index
  var arr = this.arr; // heap存储

  var currNodeIdx = 0; // 当前父子节点index: 0 -> lastNonLeafIdx
  while (currNodeIdx <= lastNonLeafIdx) { // 所有父子节点
    var leftChildIdx = currNodeIdx * 2 + 1; // 左子节点
    var rightChildIdx = leftChildIdx + 1; // 右子节点

    var targetNodeIdx = leftChildIdx; // 待换节点，默认给左子节点

    // 如果右边子节点更大，目标待换子节点选择右子节点
    if (rightChildIdx <= maxIdx && arr[rightChildIdx] > arr[leftChildIdx]) {
      targetNodeIdx = rightChildIdx;
    }

    // 最大子节点比父节点还大，交换他们
    if (arr[targetNodeIdx] > arr[currNodeIdx]) {
      var tmp = arr[targetNodeIdx];
      arr[targetNodeIdx] = arr[currNodeIdx];
      arr[currNodeIdx] = tmp;
    }

    currNodeIdx = targetNodeIdx; // 循环下一个父节点
  }
};

var N = 10;
var M = 2;
var data = new Array(N);
var heap = new Heap(M);
for (var i = 0; i < N; i++) {
  data[i] = Math.floor(Math.random() * 10000);
}
console.log(data);
for (var i = 0; i < N; i++) {
  if (data[i] > heap.peek()) {
    heap.replace(data[i]);
  }
}
console.log(heap.getVals());
