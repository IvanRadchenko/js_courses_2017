"use strict";

var arr = [1, 2, 3, 4, 5];

function sortArrayRandom(a , b) {
  return Math.random() - 0.5;
}

arr.sort(sortArrayRandom);

alert( arr );