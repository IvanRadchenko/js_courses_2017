"use strict";

function f(x) {
  return Math.random() * x;
}


function makeCaching(f) {
  let cache = {};

  return function() {
    let args = arguments[0];

    if (!(args in cache)) {
      cache[args] = f.call(this, arguments[0]);
      alert(cache[args]);
    } 
      
    return cache[args];
  }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение