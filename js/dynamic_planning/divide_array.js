'use strict';

/*
问题】将数组分为两部分，使得两部分的和最接近，返回两部分的差值。例如：

int[] array={1,0,1,7,2,4}，分为两部分为{1,0,1,2,4}，{7}，差值为1。
*/

/*
【思路】动态规划的解法。求得array的和sum，问题转化为：在array中选取若干个元素，使得这些元素的和<=sum/2，且是最接近sum/2的元素集合。

开一个数组：int[][]f=new int[length+1][sum/2+1]

状态方程：f[i][j]=Max(f[i-1][j-array[i]]+array[i],f[i-1][j])

解释：f[i][j]表示array中i个元素的和<=j，且是最接近j的元素集合。f[i-1][j-array[i]]表示array中i-1个元素的和最接近j-array[i]，所以f[i][j]应该是[i-1][j-array[i]]+array[i]和f[i-1][j]中最大的那个。有点像0-1背包问题。
*/


function sumFn(array) {
  var result = 0;

  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}

// array[i][j] 表示i个元素装容量为j的背包能装的最大容量
function getMaxDiff(array) {
  var sum = sumFn(array);
  var N = array.length;

  var e = new Array(parseInt(sum / 2) + 1);
  var f = new Array(N + 1);
  e.fill(0);
  f.fill(e);

  for (var i = 0; i < N; i++) {
    for (var j = 1; j <= parseInt(sum / 2); j++) {
      f[i + 1][j] = f[i][j];
      if (array[i] <= j && f[i][j - array[i]] + array[i] > f[i][j]) {
        f[i + 1][j] = f[i][j - array[i]] + array[i];
      }

      console.log(f);
    }
    console.log('======>', f)
  }
  return sum - 2 * f[N][parseInt(sum / 2)];
}


var array = [1, 2];
console.log(getMaxDiff(array));
