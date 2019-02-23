// function add(a, b) { return a + b; }
// a: '12312313138129543752947293'
// b: '    4794799481984124810418'
// 3 + 8
// 9 + 1
// 2 + 4
function add(a, b) {
  var result = [];

  var lengthA = a.length;
  var lengthB = b.length;
  var minLength = Math.min(lengthA, lengthB);

  function reverseString(str) {
    var resStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      resStr += str[i];
    }
    return resStr;
  };

  a = reverseString(a);
  b = reverseString(b);

  var more = new Array(Math.max(lengthA, lengthB));
  more.fill(0);

  for (var i = 0; i < minLength; i++) {
    var intA = parseInt(a[i]);
    var intB = parseInt(b[i]);
    var sumAB = intA + intB;

    if (i > 0) {
      sumAB += more[i - 1];
    }

    if (sumAB >= 10) {
      more[i] = 1;
    }
    result.push(sumAB >= 10 ? sumAB - 10 : sumAB);
  }

  // a length larger than b
  // 将前面多余的高位加入结果中
  console.log(result, more);
  if (lengthA !== minLength) {
    for (var i = minLength; i <= lengthA - 1; i++) {
      var intA = parseInt(a[i]);
      var intMore = more[i - 1];
      var sumAMore = intA + intMore;

      if (sumAMore >= 10) {
        more[i] = 1;
      }

      result.push(sumAMore >= 10 ? sumAMore - 10 : sumAMore);
    }
    if (more[lengthA - 1] !== 0) {
      result.push(more[lengthA - 1]);
    }
  } else {
    for (var i = minLength; i <= lengthB - 1; i++) {
      var intB = parseInt(b[i]);
      var intMore = more[i - 1];
      var sumBMore = intB + intMore;

      if (sumBMore >= 10) {
        more[i] = 1;
      }
      result.push(sumBMore >= 10 ? sumBMore - 10 : sumBMore);
    }
    if (more[lengthB - 1] !== 0) {
      result.push(more[lengthB - 1]);
    }
  }

  // return result.join('');
  return result.reverse().join('');
};

// 改进版本：
// 两个stack保存两个输入大整数
function addPlus(a, b) {
  var res = '';
  temp = 0;
  a = a.split('');
  b = b.split('');

  while(a.length || b.length || temp) {
    // ~~undefined === 0, true == 1, false == 0
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }

  return res.replace(/^0+/, '');
};

// 几种反转字符串方式:
// 1.for loop
function reverse(str) {
  let reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
// 2.reverse() method for arrays
function reverse(str) {
  return str.split('').reverse().join('');
};
// 3.spread syntax(ES6) + reverse() method for arrays
function reverse(str) {
  return [...str].reverse().join('');
};
// 4.reduce() method for arrays
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
};
// 5.recursion
function reverse(str) {
  return str ? reverse(str.substr(1)) + str[0] : str;
};
