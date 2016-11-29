'use strict'
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key);
}

var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log('index:' + i + '   vaule:' + a[i]);
}

var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
for (var x of a) { // 遍历Array
    console.log('遍历Array' + x);
}
for (var x of s) { // 遍历Set
    console.log('遍历Set' + x);
}