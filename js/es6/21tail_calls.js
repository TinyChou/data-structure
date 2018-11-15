/*
Calls in tail-position are guaranteed to not grow the stack unboundedly.
Makes recursive algorithms safe in the face of unbounded inputs.
*/

function factorial(n, acc = 1) {
    "use strict";
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES2015
factorial(100000)
