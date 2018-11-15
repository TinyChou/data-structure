/*
Object literals are extended to support setting the prototype at construction,
shorthand for foo: foo assignments, defining methods and making super calls.
Together, these also bring object literals and class declarations closer together,
and let object-based design benefit from some of the same conveniences.
*/

var obj = {
  // Set the prototype, "__proto__" or '__proto__' would also work.
  __proto__: theProtoObj,

  // Computed property name does not set prototype or trigger early error for
  // duplicate __proto__ properties.
  ['__proto__']: somethingElse,

  // Shorthand for 'handler: handler'
  handler,

  // Methods
  toString() {
    // super calls
    return 'd ' + super.toString();
  },

  // Computed (dynamic) property names.
  [ 'prop_' + (() => 42)()]: 42
};
