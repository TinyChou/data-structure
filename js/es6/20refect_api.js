/*
Full reflection API exposing the runtime-level meta-operations on objects.
This is effectively the inverse of the Proxy API,
and allows making calls corresponding to the same meta-operations as the proxy traps.
 Especially useful for implementing proxies.
*/

var O = {a: 1};
Object.defineProperty(O, 'b', {value: 2});
O[Symbol('c')] = 3;

Reflect.ownKeys(O); // ['a', 'b', Symbol(c)]

function C(a, b){
  this.c = a + b;
}
var instance = Reflect.construct(C, [20, 22]);
instance.c; // 42
