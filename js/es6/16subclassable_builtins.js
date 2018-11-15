/*
In ES2015, built-ins like Array,
Date and DOM Elements can be subclassed.
*/
// User code of Array subclass
class MyArray extends Array {
    constructor(...args) { super(...args); }
}

var arr = new MyArray();
arr[1] = 12;
arr.length == 2
