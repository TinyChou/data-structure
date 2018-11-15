/*
Symbols enable access control for object state.
Symbols allow properties to be keyed by either string (as in ES5) or symbol.
Symbols are a new primitive type. Optional name parameter used in debugging
- but is not part of identity. Symbols are unique (like gensym),
but not private since they are exposed via reflection features like Object.getOwnPropertySymbols.
*/
(function() {

  // module scoped symbol
  var key = Symbol("key");

  function MyClass(privateData) {
    this[key] = privateData;
  }

  MyClass.prototype = {
    doStuff: function() {
      ... this[key] ...
    }
  };

  // Limited support from Babel, full support requires native implementation.
  typeof key === "symbol"
})();

var c = new MyClass("hello")
c["key"] === undefined
