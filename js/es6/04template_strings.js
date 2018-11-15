/*
Template strings provide syntactic sugar for constructing strings.
This is similar to string interpolation features in Perl, Python and more.
Optionally, a tag can be added to allow the string construction to be customized,
avoiding injection attacks or constructing higher level data structures from string contents.
*/

// Baisc literal string creation
`This is a pretty little template string.`

// Multiline strings
`In ES5 this is
not legal.`

// interpolate variable bindings
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`

// Construct an HTTP request prefix is used to interpret the replacements and construction
GET`http://foo.org/bar?a=${a}&b=${b}
  Content-Type: application/json
  X-Credentials: ${credentials}
  { "foo": ${foo}, "bar": ${bar} }`(myOnReadyStateChangeHandler);
