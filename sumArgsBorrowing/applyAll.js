"use strict";


/**
* Apply func Function on all the listed argumens
* @param {Function} func - Function to apply
* @param {number} arg1 - Any number
* @param {bumber} arg2 - Any number
* @param {*} ... - other number arguments
* @return {number} - result of the func appliance
*/ 


function applyAll(func, arg1, arg2) {
  let args = [].slice.call(arguments, 1);
  return func.apply(this, args);
}


// Math max appliance
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Math min appliance
alert( applyAll(Math.min, 2, -2, 3) ); // -2

function sum() { // sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24