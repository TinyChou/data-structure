function main() {
  var weight = [
    2, 4, 5, 6, 7
  ];
  var value = [
    2, 4, 5, 6, 7
  ];

  var C = 12;
  var x = [];

  var total = knapSack(C, weight, value, x);
  console.log("Total weight is " + total);
}

function knapSack(C, weight, value, x) {
  var V = new Array(weight.length + 1);
  for (var i = 0; i < V.length; i++) {
    V[i] = new Array(C + 1);
    V[i].fill(0);
  }
  console.log(V);

  for (var i = 1; i <= weight.length; i++) {
    for (var j = 1; j <= C; j++) {
      if (j < weight[i - 1]) {
        V[i][j] = V[i - 1][j];
      } else {
        V[i][j] = Math.max(
          V[i - 1][j],
          V[i - 1][j - weight[i - 1]] + value[i - 1]
        );
      }
    }
  }

  console.log('Dynamic Matrix: ', V);
  // for (var i = 1; i <= weight.length; i++) {
  //   for (var j = 1; j <= C; j++) {
  //     console.log(V[i][j] + " ");
  //   }
  // }

  var j = C;
  for (var i = weight.length; i > 0; i--) {
    if (V[i][j] > V[i - 1][j]) {
      x[i] = 1;
      j = j - weight[i - 1];
    } else {
      x[i] = 0;
    }
  }

  console.log('The articles chosen is: ');
  // for (var i = 0; i < weight.length; i++) {
  //   if (x[i]) console.log(i + 1);
  // }
  console.log(x);
  console.log(value);

  return V[weight.length][C];
}

main();
