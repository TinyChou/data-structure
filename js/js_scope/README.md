#1. JavaScript scope chain.
```js
<script type="text/javascript">
  var a = 1;

  function outer() {
    var b = 2;
    function inner() {
      var c = 3;
      alert(a);
    }
    inner(); // call inner()
  }
  outer(); // call outer()
</script>
```
When call ``alert(a)`` in ``inner()`` the variable 'a' is not found in the function scope so we try to search the a 'a' along the scope chain 'inner -> outer -> window'. And we find a global 'a' variable then alert it.
#2. Local variables have higher priority than global variables in a function.
```js
<script type="text/javascript">
  var a = 1;
  function foo() {
    var a = 2;
    alert(a); // will be 2 not 1
  }
  foo();
  alert(a); // will be 1
</script>
```
#3. No block scope.
```js
<script type="text/javascript">
  function foo() {
    var i = 0;
    if (1) {
      var j = 0;
      for (var k = 0; k < 3; k++) {
        alert(k); //0 1 2
      }
      alert(k); // 3
    }
    alert(j); // 0
  }
</script>
```
#4. No matter where you declare your local variables has no difference.
```js
<scirpt type="text/javascript">
  function foo() {
    var a = 1;
    function fun() {
      a = 100;
    }
    fun();
    alert(a); // 100
  }
  foo();
</script>
```
You can assignment the variable anywhere in function.

```js
<script type="text/javascript">
  var x = 1;
  function foo() {
    alert(x); // undefined!
    var x = 2;
    alert(x); // 2
  }
  foo();
</script>
```
same as:
```js
<script type="text/javascript">
  var x = 1;
  function foo() {
    var x;
    alert(x);
    x = 2;
    alert(x);
  }
  foo();
</script>
```
#5. Local variables without 'VAR' are global variables.
```js
<script type="text/javascript">
  function foo() {
    x = 100;
  }
  foo();
  alert(x); //100
</script>
```
#6. Global variables are properties of WINDOW(Browser)/GLOBAL(Node).
```js
<script type="text/javascript">
  var x = 100;
  alert(window.x); // 100
  alert(x); // 100
</script>
```
same as:
```js
<script type="text/javascript">
  window.x = 100;
  alert(window.x === x); // true
</script>
```
