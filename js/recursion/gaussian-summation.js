/*

  1 + 2 + 3 + ... + n = n*(n + 1) / 2, n为任意自然数 高斯求和
  
  数学归纳法本身非常简单。如果我们想要证明某个命题对于自然数n都成立，那么:

  第一步 证明命题对于n = 1成立。

  第二步 假设命题对于n成立，n为任意自然数，证明在此假设下，命题对于n+1成立。

  命题得证
*/


function gaussianSummation(n) {
  if (n === 1) {
    return 1; // basic case
  } else {
    return gaussianSummation(n - 1) + n;
  }
}


// testing...
var N = 100;
var hopeResult = N * (N + 1) / 2;
var result = gaussianSummation(100);

console.log(hopeResult, result, result === hopeResult);