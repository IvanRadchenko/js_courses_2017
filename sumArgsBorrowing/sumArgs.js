"use strict";
//simple example of sum Function with an aaray as an argument
function sum(arr) {
  return arr.reduce(function(a,b) {
    return a + b;
  });
}

alert(sum([1, 2, 3]));



/**
* Borrow function for Arguments operations
* using the call or apply methods
* @param {*} pseudo-array - Number sequence
* @return {number} sum of argumens numbers
*/ 

function sumArgs() {
  let reduce = [].reduce;

  let sumArgs = reduce.call(arguments, function(a ,b) {return a + b} );

  return sumArgs;
}

console.log(sumArgs(1, 2, 3));