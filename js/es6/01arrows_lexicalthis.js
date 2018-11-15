/*
Arrows are a function shorthand using the => syntax.
They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript.
They support both expression and statement bodies.
Unlike functions, arrows share the same lexical this as their surrounding code.
If an arrow is inside another function, it shares the “arguments” variable of its parent function.
*/

// 1.Expression bodies
var odds = evens.map( v => v + 1 );
var nums = evens.map( (v, i) => v + i );

// 2.Statment bodies
nums.forEach( v => {
  if ( v % 5 === 0 ) {
    fives.push( v );
  }
} );

// 3.Lexical ``this``
var bob = {
  _name: 'bob',
  _friends: [ 'annie', 'tiny', 'chou' ],
  printFriends () {
    this._friends.forEach( f => {
      console.log( this._name + 'knows ' + f );
    } );
  }
};

// 4.Lexical ``arguments``
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push( number * number );
    }

    return numbers;
  };

  return example();
}

square( 2, 4, 7.5, 8, 11.5, 21 ); // returns: [ 4, 16, 56.25, 64, 132.25, 441 ]
